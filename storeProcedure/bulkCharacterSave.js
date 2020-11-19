function updateSproc(items, _bracket) {
	var collection = getContext().getCollection();
	var collectionLink = collection.getSelfLink();
	var response = getContext().getResponse();
	var count = 0;

	if (!items) throw new Error('The array is undefined or null.');

	var numItems = items.length;

	if (numItems == 0) {
		getContext().getResponse().setBody(0);
		return;
	}

	tryQueryAndUpdate(items[count], callback);

	function tryQueryAndUpdate(item, callback) {
		var query = {
			query: 'SELECT * FROM Characters c where c.blizzardId = @id',
			parameters: [{ name: '@id', value: item.blizzardId }],
		};

		var isAccepted = collection.queryDocuments(collectionLink, query, function (
			err,
			documents,
			responseOptions,
		) {
			if (err) throw err;

			if (documents.length > 0) {
				tryUpdate(documents[0], item, callback);
			} else {
				tryCreate(item, callback);
			}
		});
	}

	function tryUpdate(document, item, callback) {
		document.faction = item.faction;
		document.realm = item.realm;
		document.gender = item.gender;
		document.itemLevel = item.itemLevel;
		document.title = item.title;
		document.spec = item.spec;
		document.race = item.race;
		document.guild = item.guild;

		updateBrackets(document, item, 'current_' + _bracket);

		var isAccepted = collection.replaceDocument(
			document._self,
			document,
			callback,
		);
	}

	function updateBrackets(document, item, bracket) {
		var other = item[bracket];
		var current = document[bracket];

		if (
			!current ||
			(other &&
				(other.rank !== current.rank ||
					other.played !== current.played ||
					other.rating !== current.rating))
		) {
			document[bracket].rank = item[bracket].rank;
			document[bracket].rating = item[bracket].rating;
			document[bracket].played = item[bracket].played;
			document[bracket].won = item[bracket].won;
			document[bracket].lost = item[bracket].lost;

			if (document.brackets) {
				document.brackets.push(item[bracket]);
			}
		}
	}

	function tryCreate(item, callback) {
		item.brackets = [item['current_' + _bracket]];
		var isAccepted = collection.createDocument(collectionLink, item, callback);

		if (!isAccepted) getContext().getResponse().setBody(count);
	}

	function callback(err, item, options) {
		if (err) throw err;
		count++;
		if (count >= numItems) {
			getContext().getResponse().setBody(count);
		} else {
			tryQueryAndUpdate(items[count], callback);
		}
	}
}

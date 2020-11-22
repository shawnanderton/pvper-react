import { useState, useEffect } from 'react';

const baseUrl = '/api';

export default function useFetch<T>(url: string | undefined): any {
	const [data, setData] = useState<T | null>(null);
	const [total, setTotal] = useState(0);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function init() {
			try {
				const response = await fetch(baseUrl + url);
				if (response.ok) {
					const json = await response.json();
					const t = parseInt(response.headers.get('x-total-count') || '0');
					setTotal(t);
					setData(json);
				} else {
					throw response;
				}
			} catch (e) {
				setError(e);
				console.log(e);
			} finally {
				setLoading(false);
			}
		}
		if (url) {
			init();
		}
	}, [url]);

	return { data, error, loading, total };
}

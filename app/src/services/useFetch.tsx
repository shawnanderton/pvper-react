import { useState, useEffect, useRef } from 'react';

const baseUrl = '/api';

export default function useFetch<T>(url: string) {
	const isMounted = useRef(false);
	const [data, setData] = useState<T | null>(null);
	const [total, setTotal] = useState(0);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		isMounted.current = true;
		async function init() {
			try {
				const response = await fetch(baseUrl + url);
				if (response.ok) {
					const json = await response.json();
					const t = parseInt(response.headers.get('x-total-count') || '0');
					setTotal(t);
					if (isMounted.current) setData(json);
				} else {
					throw response;
				}
			} catch (e) {
				if (isMounted.current) setError(e);
				console.log(e);
			} finally {
				if (isMounted.current) setLoading(false);
			}
		}
		init();

		return () => {
			isMounted.current = false;
		};
	}, [url]);

	return { data, error, loading, total };
}

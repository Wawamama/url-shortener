import { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { BitlyClient } from 'bitly-react'
const bitly = new BitlyClient('aaf69c17787a58c7928e897513167597852b622f', {})

const Url = () => {
	const [url, setUrl] = useState('')
	const [shortURL, setShortURL] = useState('')

	useEffect(() => {
		if (url === '') setShortURL('')
	}, [url])

	const shortenUrl = async url => {
		try {
			const regex =
				/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
			const result = await bitly.shorten(
				url.match(regex) ? url : `http://${url}`
			)
			setShortURL(result.url)
		} catch (err) {
			console.log(err.message)
			throw err
		}
	}

	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<TextField
				id="outlined-basic"
				label="Enter URL"
				variant="outlined"
				onChange={e => setUrl(e.target.value)}
			/>
			<Button variant="contained" onClick={() => shortenUrl(url)}>
				Shorten
			</Button>
			<div className="result">{shortURL}</div>
		</div>
	)
}

export default Url

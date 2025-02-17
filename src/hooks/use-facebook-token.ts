import { useEffect, useState } from 'react'

export default function useFacebookToken() {
    const [facebookToken, setFacebookToken] = useState('')

    useEffect(() => {
        const localToken = localStorage.getItem('facebook_token')
        if (localToken && localToken.length > 0) {
            setFacebookToken(localToken)
        }
    }, [])

    function setNewFacebookToken(token: string) {
        localStorage.setItem('facebook_token', token)
    }

    function deleteFacebookToken() {
        setFacebookToken('')
        localStorage.removeItem('facebook_token')
    }

    function editFacebookToken(token: string) {
        setFacebookToken(token)
    }

    return {
        facebookToken,
        setNewFacebookToken,
        deleteFacebookToken,
        editFacebookToken,
    }
}

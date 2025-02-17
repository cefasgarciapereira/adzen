import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import useFacebookToken from '@/hooks/use-facebook-token'

export default function Settings() {
    const {
        facebookToken,
        deleteFacebookToken,
        setNewFacebookToken,
        editFacebookToken,
    } = useFacebookToken()

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        editFacebookToken(e.target.value)
    }

    function handleSubmit() {
        setNewFacebookToken(facebookToken)
    }

    return (
        <div>
            <div className="max-w-96 place-items-end">
                <div className="w-full">
                    <Label htmlFor="facebookToken">Facebook Token</Label>
                    <Input
                        placeholder="Facebook Token"
                        onChange={handleChange}
                        value={facebookToken}
                        type="text"
                        id="facebookToken"
                    />
                </div>
                <div>
                    <Button
                        className="mt-4 mr-2"
                        onClick={deleteFacebookToken}
                        variant="ghost"
                    >
                        Excluir
                    </Button>
                    <Button className="mt-4" onClick={handleSubmit}>
                        Salvar
                    </Button>
                </div>
            </div>
        </div>
    )
}

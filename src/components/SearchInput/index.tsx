import { InputContainer, StyledInput } from "./styles";
import { MagnifyingGlass } from "@phosphor-icons/react";

interface InputSearchProps {
    searchTerm: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchInput({ searchTerm, onChange }: InputSearchProps) {
    return (
        <InputContainer>
            <MagnifyingGlass />
            <StyledInput
                type="text"
                placeholder="Buscar..."
                value={searchTerm}
                onChange={onChange}
            />
        </InputContainer>
    )
}
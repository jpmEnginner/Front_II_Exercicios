import * as S from './Denuncias.styled';
//import backSvg from '/assets/icons/arrow-left.svg'; - depois descomentar o icone apos eu importar eles todos pra pagina
import { Link } from 'react-router-dom';

// MOCK de dados – substitua por fetch na API
const rows = [
    { id: 5, viagem: 1, reportador: 'Não informado', reportado: 'Ana Costa', motivo: 'Comportamento inadequado', status: 'resolved' },
    { id: 6, viagem: 2, reportador: 'Não informado', reportado: 'Roberto Lima', motivo: 'Comportamento inadequado', status: 'pending' },
    { id: 4, viagem: 1, reportador: 'Não informado', reportado: 'Fernanda Souza', motivo: 'Comportamento perigoso', status: 'analyzing' },
];

export default function Denuncias({ onBack }) {
    return (
        <S.Main>
            <S.Container>

                <S.HeaderLine>
                    {/* <S.BackBtn onClick={onBack}>
                        <S.BackIcon src={backSvg} alt="Voltar" />
                    </S.BackBtn> */}
                    <S.Title>Denúncias</S.Title>
                </S.HeaderLine>

                <S.TableContainer>
                    <S.TableWrapper>
                        <S.Table>
                            <S.Thead>
                                <S.Tr>
                                    <S.Th>ID da Denúncia</S.Th>
                                    <S.Th>ID da Viagem</S.Th>
                                    <S.Th>Reportador</S.Th>
                                    <S.Th>Usuário Reportado</S.Th>
                                    <S.Th>Motivo</S.Th>
                                    <S.Th center>Status</S.Th>
                                    <S.Th center>Ações</S.Th>
                                </S.Tr>
                            </S.Thead>

                            <tbody>
                                {rows.map(r => (
                                    <S.Tr key={r.id}>
                                        <S.Td>#{r.id}</S.Td>
                                        <S.Td>#{r.viagem}</S.Td>
                                        <S.Td>{r.reportador}</S.Td>
                                        <S.Td>{r.reportado}</S.Td>
                                        <S.Td>{r.motivo}</S.Td>
                                        <S.Td center>
                                            <S.BadgeStatus variant={r.status}>
                                                {r.status === 'resolved' ? 'Resolvido'
                                                    : r.status === 'pending' ? 'Pendente'
                                                        : r.status === 'analyzing' ? 'Analisando'
                                                            : 'Desconhecido'}
                                            </S.BadgeStatus>
                                        </S.Td>
                                        <S.Td center>
                                            <S.ActionBtn as={Link} to={`/admin/denuncias/${r.id}`}>Visualizar</S.ActionBtn>
                                        </S.Td>
                                    </S.Tr>
                                ))}
                            </tbody>
                        </S.Table>
                    </S.TableWrapper>
                </S.TableContainer>

            </S.Container>
        </S.Main>
    );
}
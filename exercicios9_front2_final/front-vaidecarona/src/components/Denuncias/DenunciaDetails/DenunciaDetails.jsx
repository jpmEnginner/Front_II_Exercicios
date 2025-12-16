import * as S from './DenunciaDetails.styled';
//import backSvg from '/assets/icons/arrow-left.svg';  // mesma coisa aqui ,por o icone depois!

// MOCK – troque por fetch via id
const denunciaMock = {
  id: 5,
  viagemId: 1,
  data: '16/01/2024',
  categoria: 'Comportamento inadequado',
  reportador: 'Não informado',
  reportado: 'Ana Costa',
  userId: 4,
  status: 'Resolvido',
  descricao: 'Passageiro foi grosseiro durante a viagem',
};

export default function DenunciaDetails({ onBack }) {
  const d = denunciaMock;

  return (
    <S.Main>
      <S.Container>
        <S.HeaderLine>
          {/* <S.BackBtn onClick={onBack}>
            <S.BackIcon src={backSvg} alt="Voltar" />
          </S.BackBtn> */}
          <S.Title>Detalhes da Denúncia</S.Title>
        </S.HeaderLine>

        <S.Card>
          {/* Usuário denunciado */}
          <S.Section>
            <S.SectionTitle>Usuário Denunciado</S.SectionTitle>
            <S.UserInfo>
              <S.Avatar src="/assets/img/user-default.jpg" alt={d.reportado} />
              <S.UserDetails>
                <strong>{d.reportado}</strong>
                <span>ID do Usuário: {d.userId}</span>
              </S.UserDetails>
            </S.UserInfo>
          </S.Section>

          {/* Problema denunciado */}
          <S.Section>
            <S.SectionTitle>Problema Denunciado</S.SectionTitle>

            <S.Grid>
              <S.GridItem>
                <S.Label>ID da Denúncia</S.Label>
                <S.Value>#{d.id}</S.Value>
              </S.GridItem>

              <S.GridItem>
                <S.Label>Data da Denúncia</S.Label>
                <S.Value>{d.data}</S.Value>
              </S.GridItem>

              <S.GridItem>
                <S.Label>Categoria da Denúncia</S.Label>
                <S.Value>{d.categoria}</S.Value>
              </S.GridItem>

              <S.GridItem>
                <S.Label>Reportado por</S.Label>
                <S.Value>{d.reportador}</S.Value>
              </S.GridItem>

              <S.GridItem>
                <S.Label>ID da Viagem</S.Label>
                <S.Value>#{d.viagemId}</S.Value>
              </S.GridItem>

              <S.GridItem>
                <S.Label>Status</S.Label>
                <S.Value>{d.status}</S.Value>
              </S.GridItem>

              <S.GridItem full>
                <S.Label>Descrição da Denúncia</S.Label>
                <S.Value>{d.descricao}</S.Value>
              </S.GridItem>
            </S.Grid>
          </S.Section>

          {/* Ações */}
          <S.Section>
            <S.SectionTitle>Ações</S.SectionTitle>
            <S.Actions>
              <S.ResolveBtn>Marcar Resolvida</S.ResolveBtn>
              <S.DeleteBtn>Apagar Denúncia</S.DeleteBtn>
            </S.Actions>
          </S.Section>
        </S.Card>
      </S.Container>
    </S.Main>
  );
}
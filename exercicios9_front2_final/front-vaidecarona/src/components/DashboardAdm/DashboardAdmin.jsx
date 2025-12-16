import { useMemo } from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

import * as S from './DashboardAdmin.styles';

function DashboardAdmin() {
  /* --------- MOCK: substitua pelos dados reais do back-end --------- */
  const metricValue  = 0;
  const metricChange = 15; // +15 %

  const chartData = useMemo(
    () => ({
      labels: [
        'Usuários Ativos',
        'Viagens Realizadas',
        'Denúncias Resolvidas',
        'Novos Cadastros',
        'Cancelamentos',
        'Outros',
      ],
      datasets: [
        {
          data: [20, 40, 10, 15, 5, 10],
          backgroundColor: [
            '#007bff', '#28a745', '#17a2b8',
            '#ffc107', '#dc3545', '#6c757d',
          ],
          borderWidth: 1,
        },
      ],
    }),
    []
  );

  const chartOptions = {
    cutout: '60%',
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: { boxWidth: 12, padding: 16 },
      },
    },
  };

  return (
    <S.Main>
      <S.Container>
        <S.Title>Painel de Controle</S.Title>

        {/* Métrica principal */}
        <S.MetricCard>
          <S.MetricLabel>Uso da Plataforma</S.MetricLabel>
          <S.MetricValue>{metricValue}</S.MetricValue>
          <S.MetricChange positive={metricChange >= 0}>
            Últimos 30 Dias&nbsp;
            {metricChange >= 0 ? '+' : ''}
            {metricChange}%
          </S.MetricChange>
        </S.MetricCard>

        {/* Gráfico donut */}
        <S.ChartCard>
          <S.ChartWrapper>
            <Doughnut data={chartData} options={chartOptions} />
          </S.ChartWrapper>
        </S.ChartCard>

        {/* Botões de atalho (Link para evitar refresh) */}
        <S.ActionButtons>
          <S.ActionBtnPrimary as={Link} to="/admin/denuncias">
            Gerenciar<br />Denúncias
          </S.ActionBtnPrimary>

          <S.ActionBtnSecondary as={Link} to="/admin/usuarios">
            Gerenciar<br />Usuários
          </S.ActionBtnSecondary>
        </S.ActionButtons>
      </S.Container>
    </S.Main>
  );
}

export default DashboardAdmin;
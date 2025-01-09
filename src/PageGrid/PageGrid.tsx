import stylesGrid from './styles/blocks/index.module.scss';

export const PageGrid = () => {
  return (
    <main>
      <div className={stylesGrid.container}>
        <div className={stylesGrid.item}>1</div>
        <div className={stylesGrid.item}>2</div>
        <div className={stylesGrid.item}>3</div>
        <div className={stylesGrid.item}>4</div>
        <div className={stylesGrid.item}>1</div>
        <div className={stylesGrid.item}>2</div>
        <div className={stylesGrid.item}>3</div>
        <div className={stylesGrid.item}>4</div>
        <div className={stylesGrid.item}>1</div>
        <div className={stylesGrid.item}>2</div>
        <div className={stylesGrid.item}>3</div>
        <div className={stylesGrid.item}>4</div>
      </div>
    </main>
  );
};

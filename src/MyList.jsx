import { FixedSizeList } from 'react-window';

function MyList({ items }) {
    const itemCount = items.length;
  
    const renderItem = ({ index, style }) => {
      const item = items[index]+"Arslan Akmal";
      return <div style={style}>{item}</div>;
    };
  
    return (
      <FixedSizeList height={600} itemCount={itemCount} itemSize={50} width="100%">
        {renderItem}
      </FixedSizeList>
    );
  }

export default MyList
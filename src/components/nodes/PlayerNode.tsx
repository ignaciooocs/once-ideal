import Image from 'next/image';
import React, { memo, useState } from 'react';
import { IoTrash, IoTrashOutline } from 'react-icons/io5';
import { Handle, useStore, Position } from 'reactflow';

export default memo(({ id }: any) => {
  const label = useStore((s) => {
    const node = s.nodeInternals.get(id);

    const [open, setOpen] = useState(false);

    if (!node) {
      return null;
    }

    return (
        <div onClick={() => setOpen(!open)} className='node flex flex-col gap-1 items-center rounded-md'>
            <figure className='rounded-3xl w-[60px] h-[60px]'>
                <Image 
                  priority 
                  src={node.data.photo} 
                  width={60} 
                  height={60} 
                  alt="" 
                  id={id} 
                  className='object-contain rounded-full'
                  style={{ outline: `solid 3px ${node.data.color}` }}
                />
            </figure>
            <p 
              style={{ backgroundColor: node.data.color }} 
              className='text-white px-2 rounded-md text-xs font-sans font-semibold'
            >
              {node.data.name}
            </p>
            {open &&
              <section className='absolute'>
                <button onClick={() => node.data.deleteNode()}><IoTrash color="red" /></button>
              </section>
            }
        </div>
    );
  });

  return (
    <>
      <div className="wrapper gradient">
        <div className="inner">{label || 'no node connected'}</div>
      </div>
      {/* <Handle type="target" position={Position.Left} /> */}
    </>
  );
});
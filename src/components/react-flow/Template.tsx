'use client'
import React, { useEffect, useState } from 'react';
import ReactFlow, { useNodesState } from 'reactflow';
import PlayerNode from '../nodes/PlayerNode';
import { IPlayer } from '@/types/player';
import 'reactflow/dist/style.css';
import { IoPerson, IoPersonOutline, IoSearch, IoSearchOutline, IoTrashOutline } from 'react-icons/io5';
import Image from 'next/image';
import ItemsList from '../players/ItemsList';
import { SearchTeam } from '../teams/SearchTeam';
import { usePlayerStore } from '@/store/usePlayerStore';

const initialNodes: any = [];
const nodeTypes = { circle: PlayerNode }

export default function Template() {

    const [change, setChange] = useState<'items' | 'search'>('items')
    const [color, setColor] = useState('#ff3333')

    const { count, resetCount } = usePlayerStore();
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);

    function addNode(player: IPlayer) {
        if (nodes.length > 11) return alert('Solo puedes agregar 11 jugadores');
        setNodes((prevNodes) => [
                ...prevNodes,
                {
                    id: player.id.toString(),
                    type: 'circle',
                    position: { x:50, y: 50 },
                    data: {
                        ...player, 
                        color,
                        deleteNode: () => {
                            setNodes((prevNodes) => prevNodes.filter((node) => node.id !== player.id.toString()))
                        }
                    },
                    
                },
            ]
        );
    }

    function removeAlls () {
        setNodes([])
    }

    const ref: React.LegacyRef<HTMLElement> = React.useRef(null);

  return (
    <section className='flex flex-col items-center h-full'>
         <section ref={ref} className="flex flex-col items-center w-4/5 relative">
            <div className='absolute top-0 z-[-1] w-full h-full bg-gradient-to-t from-slate-800 to-slate-900'/>
            <div className="w-[800px] h-[450px]">
                <figure className='w-[800px] h-[450px] absolute z-[-1]'>
                    <Image src={`/horizontal/campo-1.jpeg`} width={800} height={750} alt="campo" />
                {/* <Campo /> */}
                </figure>
                <ReactFlow
                    nodes={nodes}
                    onNodesChange={onNodesChange}
                    zoomOnScroll={false}
                    zoomOnDoubleClick={false}
                    panOnDrag={false}
                    translateExtent={[[0, 0], [800, 400]]}
                    nodesConnectable={false}
                    nodeTypes={nodeTypes}
                />
            </div>
            <section className='bg-gray-300 w-full'>
                <button onClick={removeAlls}>
                    <IoTrashOutline />
                </button>
                <section className='flex gap-2'>
                    <label>elegir color</label>
                    <input type="color" value={color} onChange={(e) => setColor(e.target.value)}/>
                </section>
            </section>
        </section>
        <section className='bg-black sticky left-0 p-4 flex flex-col gap-4 w-4/5'>
            <button className='relative' onClick={() => {setChange('items'); resetCount()}}>
                {change === 'items' 
                    ? <IoPerson color='white' size={23} />
                    : <div className='text-red-500 flex'>
                        <IoPersonOutline color='white' size={20} />
                        <p className='absolute top-[-10px] right-[-2px]'>{count < 1 ? '' : count}</p>
                    </div>
                }
            </button>
            <button onClick={() => setChange('search')}>
                {change === 'search' 
                    ? <IoSearch color='white' size={23} />
                    : <IoSearchOutline color='white' size={20} />
                }
            </button>
        </section>
        {change === 'items' && <ItemsList addNode={addNode}/>}
        {change === 'search' && <SearchTeam />}
       
    </section>
  );
}
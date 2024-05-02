import { ReactNode } from "react";

type StyledPanelProps = {
    // childrenの実態はReactNode型で返す
    // ReactNode型はReactで使用されるすべての要素を表す型
    children: ReactNode
};

export default function StyledPanel({children}: StyledPanelProps) {
    return (
        <div style={{
          margin: 50,
          padding: 20,
          border: '1px solid #000',
          width: 'fit-content',
          boxShadow: '10px 5px 5px #999',
          backgroundColor: '#fff'
        }}>
          {children}
        </div>
    );
}
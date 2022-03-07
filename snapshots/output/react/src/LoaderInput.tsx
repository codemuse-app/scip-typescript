  import React from 'react'
//       ^^^^^ reference @types/react 17.0.0 `index.d.ts`/React/
  
  /** Takes loading prop, input component as child */
  interface Props {
//          ^^^^^ definition react-example 1.0.0 src/`LoaderInput.tsx`/Props#
    loading: boolean
//  ^^^^^^^ definition react-example 1.0.0 src/`LoaderInput.tsx`/Props#loading.
    children: React.ReactNode
//  ^^^^^^^^ definition react-example 1.0.0 src/`LoaderInput.tsx`/Props#children.
//            ^^^^^ reference @types/react 17.0.0 `index.d.ts`/React/
//                  ^^^^^^^^^ reference local 0
  }
  
  export const LoaderInput: React.FunctionComponent<Props> = ({
//             ^^^^^^^^^^^ definition react-example 1.0.0 src/`LoaderInput.tsx`/LoaderInput.
//                          ^^^^^ reference @types/react 17.0.0 `index.d.ts`/React/
//                                ^^^^^^^^^^^^^^^^^ reference @types/react 17.0.0 `index.d.ts`/React/FunctionComponent#
//                                                  ^^^^^ reference react-example 1.0.0 src/`LoaderInput.tsx`/Props#
    loading,
//  ^^^^^^^ reference local 4
    children,
//  ^^^^^^^^ reference local 5
  }) => (
    <div className="hello">
//   ^^^ reference @types/react 17.0.0 `index.d.ts`/global/JSX/IntrinsicElements#div.
//       ^^^^^^^^^ reference @types/react 17.0.0 `index.d.ts`/React/HTMLAttributes#className.
      {children}
//     ^^^^^^^^ reference local 5
      {loading && <p>spinner</p>}
//     ^^^^^^^ reference local 4
//                 ^ reference @types/react 17.0.0 `index.d.ts`/global/JSX/IntrinsicElements#p.
//                            ^ reference @types/react 17.0.0 `index.d.ts`/global/JSX/IntrinsicElements#p.
    </div>
//    ^^^ reference @types/react 17.0.0 `index.d.ts`/global/JSX/IntrinsicElements#div.
  )
  
  export const LoaderInput2: React.FunctionComponent<Props> = props => {
//             ^^^^^^^^^^^^ definition react-example 1.0.0 src/`LoaderInput.tsx`/LoaderInput2.
//                           ^^^^^ reference @types/react 17.0.0 `index.d.ts`/React/
//                                 ^^^^^^^^^^^^^^^^^ reference @types/react 17.0.0 `index.d.ts`/React/FunctionComponent#
//                                                   ^^^^^ reference react-example 1.0.0 src/`LoaderInput.tsx`/Props#
//                                                            ^^^^^ definition local 7
    return <LoaderInput loading={true} key="key" children={props.children} />
//          ^^^^^^^^^^^ reference react-example 1.0.0 src/`LoaderInput.tsx`/LoaderInput.
//                      ^^^^^^^ reference react-example 1.0.0 src/`LoaderInput.tsx`/Props#loading.
//                                     ^^^ reference local 11
//                                               ^^^^^^^^ reference react-example 1.0.0 src/`LoaderInput.tsx`/Props#children.
//                                                         ^^^^^ reference local 7
//                                                               ^^^^^^^^ reference react-example 1.0.0 src/`LoaderInput.tsx`/Props#children.
//                                                               ^^^^^^^^ reference local 15
  }
  
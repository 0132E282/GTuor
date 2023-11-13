import classnames from 'classnames/bind';
export interface propsClassNames {
    styles : CSSModuleClasses;
}
export  function useClassnames({styles}:propsClassNames){
    return classnames.bind(styles);
}
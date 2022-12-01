import React, { useState, useRef, useEffect } from "react";

interface IProps {
  end: any;
  timer: any
}

const CountUp: React.FC<IProps> = ({ end, timer=50 }) => {
  const [state, setState] = useState(null);
  const ref = useRef(0);

  const accumulator = end / 200;

  const updateCounterState = () => {
    if (ref.current < end) {
      const result = Math.ceil(ref.current + accumulator);
      if (result > end) return setState(end);
      // @ts-ignore
      setState(result);
      ref.current = result;
    }
    setTimeout(updateCounterState, timer);
  };
  // @ts-ignore
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      updateCounterState();
    }

    return () => (isMounted = false);
  }, [end]);

  return <div>{state}</div>;
};

export default CountUp;

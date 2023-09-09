'use client';

import Image from 'next/image'
import { useState } from 'react';
import { Form, TextInput, Button } from '@carbon/react';

export default function Home() {
  const [auth, setAuth] = useState<void>(undefined);
  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
      {auth == null ? <SigIn setAuth={setAuth}/> : null}
    </main>
  )
}

type SigInProps = {
  setAuth: (auth: void) => void,
};

function SigIn({setAuth}: SigInProps) {
  return (
    <Form aria-label="Sig in">
      <div className="flex flex-col gap-1">
        <TextInput required id="username" labelText="Username" inline maxLength={25}/>
        <TextInput required id="password" labelText="Password" inline type="password" maxLength={255}/>
        <Button>Sig in</Button>
      </div>
    </Form>
  );
}
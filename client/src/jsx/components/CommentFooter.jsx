import React from 'react'
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap'

import commentFooter from '../../css/chatLogs/commentFooter.css'

const CommentFooter = () => (
    <div className={commentFooter.containar}>
        <InputGroup>
          <InputGroupAddon addonType="prepend"><Button outline>＋</Button></InputGroupAddon>
          <Input type="text" placeholder="Jot something down" />
        </InputGroup>
    </div>
)

export default CommentFooter
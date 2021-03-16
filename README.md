# Crud em node 
  ## Rotas 
   * /user                      "Lista todos os usuários"
   * /userlistid?id=iduser      "Lista usuários por id "
   * /userlistname?id=nomeuser  "Listar por usuário por nome"
   * /createusuario             "Inserir usuário"
  ```json
     {
      "name":"fulano de tal",
      "email":"fulano@gmail.com"
     }
   ```
   * /userupdate                "Atualizar o usuário"
   ```json
     {
      "id":"a8dfa56d-b2a7-4fcd-a766-d7af874ba3a1",
      "name":"fulano de tal",
      "email":"fulano@gmail.com"
      }
   ```
   
    * /delete?id=iduser                   "Deletar usuário"

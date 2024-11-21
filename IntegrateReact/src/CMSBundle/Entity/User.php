<?php

namespace App\CMSBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\LegacyPasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @UniqueEntity("username")
 * @ORM\Entity(repositoryClass="App\CMSBundle\Repository\UserRepository")
 * @ORM\Table(name="amz_user")
 * @method string getUserIdentifier()
 */

class User implements UserInterface, LegacyPasswordAuthenticatedUserInterface
{
    /**
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100, unique=true, nullable="true")
     */
    private $username;

    /**
     * @ORM\Column(type="string",nullable="true")
     */
    private $password;

    /**
     * @ORM\Column(type="string", nullable= true)
     */
    private $salt;

    /**
     * @ORM\Column(type="string",nullable="true")
     */
    private $roles;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $locked;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $name;


    public function getRoles(): array
    {
        $this->roles[] = 'ROLE_USER';
        return array_unique($this->roles);
    }

    public function getPassword(): ?string
    {
       return $this->password;
    }

    public function getSalt(): ?string
    {
       return $this->salt;
    }

    public function eraseCredentials()
    {

    }

    public function getUsername(): string
    {
       return $this->username;
    }

    public function __call($name, $arguments)
    {
        // TODO: Implement @method string getUserIdentifier()
    }

}
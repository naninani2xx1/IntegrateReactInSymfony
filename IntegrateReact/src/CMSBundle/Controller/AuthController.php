<?php

declare(strict_types=1);

namespace App\CMSBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends AbstractController
{
    public function login(): Response
    {
        return $this->render('@CMS/auth/login.html.twig');
    }
}

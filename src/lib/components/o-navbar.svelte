<section>
    <a id="title" href="/">Gratitude.io</a>
    <nav>
        <a href="/add-entry">Add entry</a>
        <a href="/edit-entry">Edit entry</a>
        <a href="/all-entries">All entries</a>
        <a href="/account/login">Account</a>
    </nav>
</section>
<slot></slot>
<style>
    @media(min-width: 780px){
        section {
            background-color: var(--pink);
            position: relative;
            top: 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 200px;
            color: var(--title-color);
            padding: 10px 0px 10px 50px;
        }
        #title {
            font-family: var(--main-font);
            font-size: var(--title-size);
            color: var(--title-color);
            font-weight: 100;
        }
        nav {
            display: flex;
            flex-direction: row;
            padding: 10px;
        }
        a {
            padding: 10px 30px;
            font-family: var(--main-font);
            color: #fff;
            text-decoration: none;
        }
        a:hover {
            text-shadow: 0 0 5px #fff;
        }
    }
</style>
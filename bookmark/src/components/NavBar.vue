<template>
    <div>
        <b-navbar type="dark" variant="dark" class="fixed-top">
            <b-navbar-brand tag="h1" to="/" class="mr-0 mb-0">Bookmark</b-navbar-brand>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav  class="ml-auto">
                    <b-nav-item to="/">Home</b-nav-item>

                    <b-nav-item-dropdown text="Categories" right>
                        <b-dropdown-item :to="{name: 'Category', params: {id: 'business'}}" replace>Business</b-dropdown-item>
                        <b-dropdown-item :to="{name: 'Category', params: {id: 'entertainment'}}" replace>Entertainment</b-dropdown-item>
                        <b-dropdown-item :to="{name: 'Category', params: {id: 'health'}}">Health</b-dropdown-item>
                        <b-dropdown-item :to="{name: 'Category', params: {id: 'science'}}">Science</b-dropdown-item>
                        <b-dropdown-item :to="{name: 'Category', params: {id: 'sport'}}">Sport</b-dropdown-item>
                        <b-dropdown-item :to="{name: 'Category', params: {id: 'technology'}}">Technology</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item to="/random">Random News</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        </div>
</template>

<script>
export default {
    name: "NavBar"
};
</script>
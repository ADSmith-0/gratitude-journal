<script>
    import Textfield, { Input } from '@smui/textfield';
    import FloatingLabel from '@smui/floating-label';
    import LineRipple from '@smui/line-ripple';
	import regexPatterns from '$lib/regex';

    export let name = "";
    export let label = "";
    export let type = "text";
    export let validation = "any";
    export let value = "";

    let input;
    let floatingLabel;
    let lineRipple;
</script>

<Textfield
    bind:input={input}
    bind:floatingLabel={floatingLabel}
    bind:lineRipple={lineRipple}
    style="width: 100%;"
    helperLine$style="width: 100%;"
>
    <FloatingLabel
        bind:this={floatingLabel}
        class="font-body sm-font"
        for="input"
        slot="label"
    >
        {label}
    </FloatingLabel>
    <Input
        bind:this={input}
        bind:value={value}
        id="input"
        name={name}
        type={type}
        pattern={regexPatterns[validation] || regexPatterns["any"]}
    />
    <LineRipple bind:this={lineRipple} slot="ripple" />
    <slot name="trailingIcon"></slot>
</Textfield>
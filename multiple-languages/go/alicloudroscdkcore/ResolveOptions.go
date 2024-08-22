package alicloudroscdkcore


// Options to the resolve() operation.
//
// NOT the same as the ResolveContext; ResolveContext is exposed to Token
// implementors and resolution hooks, whereas this struct is just to bundle
// a number of things that would otherwise be arguments to resolve() in a
// readable way.
type ResolveOptions struct {
	// The resolver to apply to any resolvable tokens found.
	Resolver ITokenResolver `field:"required" json:"resolver" yaml:"resolver"`
	// The scope from which resolution is performed.
	Scope IConstruct `field:"required" json:"scope" yaml:"scope"`
	// Whether the resolution is being executed during the prepare phase or not.
	Preparing *bool `field:"optional" json:"preparing" yaml:"preparing"`
}


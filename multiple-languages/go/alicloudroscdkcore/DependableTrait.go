package alicloudroscdkcore

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

// Trait for IDependable.
//
// Traits are interfaces that are privately implemented by objects. Instead of
// showing up in the public interface of a class, they need to be queried
// explicitly. This is used to implement certain framework features that are
// not intended to be used by Construct consumers, and so should be hidden
// from accidental use.
//
// Example:
//   // Usage
//   const roots = DependableTrait.get(construct).dependencyRoots;
//
//   // Definition
//   DependableTrait.implement(construct, {
//     get dependencyRoots() { return []; }
//   });
//
// Experimental.
type DependableTrait interface {
	// The set of constructs that form the root of this dependable.
	//
	// All resources under all returned constructs are included in the ordering
	// dependency.
	// Experimental.
	DependencyRoots() *[]IConstruct
}

// The jsii proxy struct for DependableTrait
type jsiiProxy_DependableTrait struct {
	_ byte // padding
}

func (j *jsiiProxy_DependableTrait) DependencyRoots() *[]IConstruct {
	var returns *[]IConstruct
	_jsii_.Get(
		j,
		"dependencyRoots",
		&returns,
	)
	return returns
}


// Experimental.
func NewDependableTrait_Override(d DependableTrait) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-core.DependableTrait",
		nil, // no parameters
		d,
	)
}

// Return the matching DependableTrait for the given class instance.
// Experimental.
func DependableTrait_Get(instance IDependable) DependableTrait {
	_init_.Initialize()

	if err := validateDependableTrait_GetParameters(instance); err != nil {
		panic(err)
	}
	var returns DependableTrait

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.DependableTrait",
		"get",
		[]interface{}{instance},
		&returns,
	)

	return returns
}

// Register `instance` to have the given DependableTrait.
//
// Should be called in the class constructor.
// Experimental.
func DependableTrait_Implement(instance IDependable, trait DependableTrait) {
	_init_.Initialize()

	if err := validateDependableTrait_ImplementParameters(instance, trait); err != nil {
		panic(err)
	}
	_jsii_.StaticInvokeVoid(
		"@alicloud/ros-cdk-core.DependableTrait",
		"implement",
		[]interface{}{instance, trait},
	)
}


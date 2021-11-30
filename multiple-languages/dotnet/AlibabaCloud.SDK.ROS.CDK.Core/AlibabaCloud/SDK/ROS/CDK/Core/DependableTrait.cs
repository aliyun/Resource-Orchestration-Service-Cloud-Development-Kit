using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>(experimental) Trait for IDependable.</summary>
    /// <remarks>
    /// Traits are interfaces that are privately implemented by objects. Instead of
    /// showing up in the public interface of a class, they need to be queried
    /// explicitly. This is used to implement certain framework features that are
    /// not intended to be used by Construct consumers, and so should be hidden
    /// from accidental use.
    ///
    /// <strong>Stability</strong>: Experimental
    /// </remarks>
    /// <example>
    /// <code>// Example automatically generated. See https://github.com/aws/jsii/issues/826
    /// // Usage
    /// var roots = DependableTrait.Get(construct).DependencyRoots;
    /// 
    /// // Definition
    /// DependableTrait.Implement(construct, new Struct { get dependencyRoots() { return []; }
    /// });</code>
    /// </example>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.DependableTrait), fullyQualifiedName: "@alicloud/ros-cdk-core.DependableTrait")]
    public abstract class DependableTrait : DeputyBase
    {
        protected DependableTrait(): base(new DeputyProps(System.Array.Empty<object?>()))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected DependableTrait(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected DependableTrait(DeputyProps props): base(props)
        {
        }

        /// <summary>(experimental) Return the matching DependableTrait for the given class instance.</summary>
        /// <remarks>
        /// <strong>Stability</strong>: Experimental
        /// </remarks>
        [JsiiMethod(name: "get", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.DependableTrait\"}}", parametersJson: "[{\"name\":\"instance\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IDependable\"}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.DependableTrait Get(AlibabaCloud.SDK.ROS.CDK.Core.IDependable instance)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.DependableTrait>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.DependableTrait), new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.IDependable)}, new object[]{instance})!;
        }

        /// <summary>(experimental) Register `instance` to have the given DependableTrait.</summary>
        /// <remarks>
        /// Should be called in the class constructor.
        ///
        /// <strong>Stability</strong>: Experimental
        /// </remarks>
        [JsiiMethod(name: "implement", parametersJson: "[{\"name\":\"instance\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IDependable\"}},{\"name\":\"trait\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.DependableTrait\"}}]")]
        public static void Implement(AlibabaCloud.SDK.ROS.CDK.Core.IDependable instance, AlibabaCloud.SDK.ROS.CDK.Core.DependableTrait trait)
        {
            InvokeStaticVoidMethod(typeof(AlibabaCloud.SDK.ROS.CDK.Core.DependableTrait), new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.IDependable), typeof(AlibabaCloud.SDK.ROS.CDK.Core.DependableTrait)}, new object[]{instance, trait});
        }

        /// <summary>(experimental) The set of constructs that form the root of this dependable.</summary>
        /// <remarks>
        /// All resources under all returned constructs are included in the ordering
        /// dependency.
        ///
        /// <strong>Stability</strong>: Experimental
        /// </remarks>
        [JsiiProperty(name: "dependencyRoots", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.IConstruct\"},\"kind\":\"array\"}}")]
        public abstract AlibabaCloud.SDK.ROS.CDK.Core.IConstruct[] DependencyRoots
        {
            get;
        }

        /// <summary>(experimental) Trait for IDependable.</summary>
        /// <remarks>
        /// Traits are interfaces that are privately implemented by objects. Instead of
        /// showing up in the public interface of a class, they need to be queried
        /// explicitly. This is used to implement certain framework features that are
        /// not intended to be used by Construct consumers, and so should be hidden
        /// from accidental use.
        ///
        /// <strong>Stability</strong>: Experimental
        /// </remarks>
        /// <example>
        /// <code>// Example automatically generated. See https://github.com/aws/jsii/issues/826
        /// // Usage
        /// var roots = DependableTrait.Get(construct).DependencyRoots;
        /// 
        /// // Definition
        /// DependableTrait.Implement(construct, new Struct { get dependencyRoots() { return []; }
        /// });</code>
        /// </example>
        [JsiiTypeProxy(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.DependableTrait), fullyQualifiedName: "@alicloud/ros-cdk-core.DependableTrait")]
        internal sealed class _Proxy : AlibabaCloud.SDK.ROS.CDK.Core.DependableTrait
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>(experimental) The set of constructs that form the root of this dependable.</summary>
            /// <remarks>
            /// All resources under all returned constructs are included in the ordering
            /// dependency.
            ///
            /// <strong>Stability</strong>: Experimental
            /// </remarks>
            [JsiiProperty(name: "dependencyRoots", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.IConstruct\"},\"kind\":\"array\"}}")]
            public override AlibabaCloud.SDK.ROS.CDK.Core.IConstruct[] DependencyRoots
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IConstruct[]>()!;
            }
        }
    }
}

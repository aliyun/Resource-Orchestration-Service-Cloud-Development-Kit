using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>(experimental) A set of constructs to be used as a dependable.</summary>
    /// <remarks>
    /// This class can be used when a set of constructs which are disjoint in the
    /// construct tree needs to be combined to be used as a single dependable.
    ///
    /// <strong>Stability</strong>: Experimental
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.ConcreteDependable), fullyQualifiedName: "@alicloud/ros-cdk-core.ConcreteDependable")]
    public class ConcreteDependable : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IDependable
    {
        /// <remarks>
        /// <strong>Stability</strong>: Experimental
        /// </remarks>
        public ConcreteDependable(): base(new DeputyProps(System.Array.Empty<object?>()))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected ConcreteDependable(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected ConcreteDependable(DeputyProps props): base(props)
        {
        }

        /// <summary>(experimental) Add a construct to the dependency roots.</summary>
        /// <remarks>
        /// <strong>Stability</strong>: Experimental
        /// </remarks>
        [JsiiMethod(name: "add", parametersJson: "[{\"name\":\"construct\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IConstruct\"}}]")]
        public virtual void Add(AlibabaCloud.SDK.ROS.CDK.Core.IConstruct construct)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.IConstruct)}, new object[]{construct});
        }
    }
}

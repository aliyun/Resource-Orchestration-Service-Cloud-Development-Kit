using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Trait marker for classes that can be depended upon&#xD; &#xD; The presence of this interface indicates that an object has&#xD; an `IDependableTrait` implementation.</summary>
    /// <remarks>
    /// This interface can be used to take an (ordering) dependency on a set of
    /// constructs. An ordering dependency implies that the resources represented by
    /// those constructs are deployed before the resources depending ON them are
    /// deployed.
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDependable), fullyQualifiedName: "@alicloud/ros-cdk-core.IDependable")]
    public interface IDependable
    {

        /// <summary>Trait marker for classes that can be depended upon&#xD; &#xD; The presence of this interface indicates that an object has&#xD; an `IDependableTrait` implementation.</summary>
        /// <remarks>
        /// This interface can be used to take an (ordering) dependency on a set of
        /// constructs. An ordering dependency implies that the resources represented by
        /// those constructs are deployed before the resources depending ON them are
        /// deployed.
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDependable), fullyQualifiedName: "@alicloud/ros-cdk-core.IDependable")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IDependable
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }
        }
    }
}

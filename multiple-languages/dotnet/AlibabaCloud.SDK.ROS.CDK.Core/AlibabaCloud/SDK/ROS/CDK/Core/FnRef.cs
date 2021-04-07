using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>The intrinsic function ``Ref`` returns the value of the specified parameter or resource.</summary>
    /// <remarks>
    /// When you specify a parameter's logical name, it returns the value of the parameter.
    /// When you specify a resource's logical name, it returns a value that you can typically use to refer to that resource, such as a physical ID.
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.FnRef), fullyQualifiedName: "@alicloud/ros-cdk-core.FnRef", parametersJson: "[{\"docs\":{\"summary\":\"The logical name of a parameter/resource for which you want to retrieve its value.\"},\"name\":\"logicalName\",\"type\":{\"primitive\":\"string\"}}]")]
    public class FnRef : AlibabaCloud.SDK.ROS.CDK.Core.Intrinsic
    {
        /// <summary>Creates an ``Ref`` function.</summary>
        /// <param name="logicalName">The logical name of a parameter/resource for which you want to retrieve its value.</param>
        public FnRef(string logicalName): base(new DeputyProps(new object?[]{logicalName}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnRef(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnRef(DeputyProps props): base(props)
        {
        }
    }
}

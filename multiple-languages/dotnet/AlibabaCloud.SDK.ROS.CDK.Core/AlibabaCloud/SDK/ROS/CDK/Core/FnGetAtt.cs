using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>The ``Fn::GetAtt`` intrinsic function returns the value of an attribute from a resource in the template.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.FnGetAtt), fullyQualifiedName: "@alicloud/ros-cdk-core.FnGetAtt", parametersJson: "[{\"docs\":{\"summary\":\"The logical name (also called logical ID) of the resource that contains the attribute that you want.\"},\"name\":\"logicalNameOfResource\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"remarks\":\"See the resource's reference page for details about the attributes available for that resource type.\",\"summary\":\"The name of the resource-specific attribute whose value you want.\"},\"name\":\"attributeName\",\"type\":{\"primitive\":\"string\"}}]")]
    public class FnGetAtt : AlibabaCloud.SDK.ROS.CDK.Core.Intrinsic
    {
        /// <summary>Creates a ``Fn::GetAtt`` function.</summary>
        /// <param name="logicalNameOfResource">The logical name (also called logical ID) of the resource that contains the attribute that you want.</param>
        /// <param name="attributeName">The name of the resource-specific attribute whose value you want.</param>
        public FnGetAtt(string logicalNameOfResource, string attributeName): base(new DeputyProps(new object?[]{logicalNameOfResource, attributeName}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnGetAtt(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FnGetAtt(DeputyProps props): base(props)
        {
        }
    }
}

using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dataworks
{
    /// <summary>Properties for defining a `RosResourceGroupRelation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-resourcegrouprelation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosResourceGroupRelationProps), fullyQualifiedName: "@alicloud/ros-cdk-dataworks.RosResourceGroupRelationProps")]
    public interface IRosResourceGroupRelationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: projectId: Workspace ID to bind
        /// </remarks>
        [JsiiProperty(name: "projectId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProjectId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: Unique ID of resource group
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ResourceGroupId
        {
            get;
        }

        /// <summary>Properties for defining a `RosResourceGroupRelation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-resourcegrouprelation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosResourceGroupRelationProps), fullyQualifiedName: "@alicloud/ros-cdk-dataworks.RosResourceGroupRelationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dataworks.IRosResourceGroupRelationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: projectId: Workspace ID to bind
            /// </remarks>
            [JsiiProperty(name: "projectId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProjectId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: Unique ID of resource group
            /// </remarks>
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

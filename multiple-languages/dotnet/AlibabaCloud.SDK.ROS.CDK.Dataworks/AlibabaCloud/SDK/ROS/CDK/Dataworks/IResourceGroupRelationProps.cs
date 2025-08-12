using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dataworks
{
    /// <summary>Properties for defining a `ResourceGroupRelation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-resourcegrouprelation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IResourceGroupRelationProps), fullyQualifiedName: "@alicloud/ros-cdk-dataworks.ResourceGroupRelationProps")]
    public interface IResourceGroupRelationProps
    {
        /// <summary>Property projectId: Workspace ID to bind.</summary>
        [JsiiProperty(name: "projectId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProjectId
        {
            get;
        }

        /// <summary>Property resourceGroupId: Unique ID of resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ResourceGroupId
        {
            get;
        }

        /// <summary>Properties for defining a `ResourceGroupRelation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-resourcegrouprelation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IResourceGroupRelationProps), fullyQualifiedName: "@alicloud/ros-cdk-dataworks.ResourceGroupRelationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dataworks.IResourceGroupRelationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property projectId: Workspace ID to bind.</summary>
            [JsiiProperty(name: "projectId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProjectId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property resourceGroupId: Unique ID of resource group.</summary>
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}

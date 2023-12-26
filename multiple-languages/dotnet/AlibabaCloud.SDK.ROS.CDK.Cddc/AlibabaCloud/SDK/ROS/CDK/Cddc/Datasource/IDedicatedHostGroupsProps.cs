using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cddc.Datasource
{
    /// <summary>Properties for defining a `DedicatedHostGroups`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroups
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDedicatedHostGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-cddc.datasource.DedicatedHostGroupsProps")]
    public interface IDedicatedHostGroupsProps
    {
        /// <summary>Property dedicatedHostGroupId: Dedicated Host Group ID.</summary>
        [JsiiProperty(name: "dedicatedHostGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DedicatedHostGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property engine: Database Engine Type.</summary>
        [JsiiProperty(name: "engine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Engine
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DedicatedHostGroups`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroups
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDedicatedHostGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-cddc.datasource.DedicatedHostGroupsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cddc.Datasource.IDedicatedHostGroupsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dedicatedHostGroupId: Dedicated Host Group ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dedicatedHostGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DedicatedHostGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property engine: Database Engine Type.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "engine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Engine
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}

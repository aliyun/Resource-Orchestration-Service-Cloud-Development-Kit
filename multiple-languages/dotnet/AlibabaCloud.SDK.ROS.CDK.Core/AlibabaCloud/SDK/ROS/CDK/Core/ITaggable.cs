using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Interface to implement tags.</summary>
    [JsiiInterface(nativeType: typeof(ITaggable), fullyQualifiedName: "@alicloud/ros-cdk-core.ITaggable")]
    public interface ITaggable
    {
        /// <summary>TagManager to set, remove and format tags.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.TagManager\"}")]
        AlibabaCloud.SDK.ROS.CDK.Core.TagManager Tags
        {
            get;
        }

        /// <summary>Interface to implement tags.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITaggable), fullyQualifiedName: "@alicloud/ros-cdk-core.ITaggable")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.ITaggable
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>TagManager to set, remove and format tags.</summary>
            [JsiiProperty(name: "tags", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.TagManager\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.TagManager Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.TagManager>()!;
            }
        }
    }
}

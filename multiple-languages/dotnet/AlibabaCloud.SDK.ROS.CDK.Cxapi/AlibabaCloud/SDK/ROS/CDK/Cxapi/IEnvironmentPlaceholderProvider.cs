using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cxapi
{
    /// <summary>Return the appropriate values for the environment placeholders.</summary>
    [JsiiInterface(nativeType: typeof(IEnvironmentPlaceholderProvider), fullyQualifiedName: "@alicloud/ros-cdk-cxapi.IEnvironmentPlaceholderProvider")]
    public interface IEnvironmentPlaceholderProvider
    {
        /// <summary>Return the account.</summary>
        [JsiiMethod(name: "accountId", returnsJson: "{\"type\":{\"primitive\":\"string\"}}")]
        string AccountId();
        /// <summary>Return the region.</summary>
        [JsiiMethod(name: "region", returnsJson: "{\"type\":{\"primitive\":\"string\"}}")]
        string Region();

        /// <summary>Return the appropriate values for the environment placeholders.</summary>
        [JsiiTypeProxy(nativeType: typeof(IEnvironmentPlaceholderProvider), fullyQualifiedName: "@alicloud/ros-cdk-cxapi.IEnvironmentPlaceholderProvider")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cxapi.IEnvironmentPlaceholderProvider
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Return the account.</summary>
            [JsiiMethod(name: "accountId", returnsJson: "{\"type\":{\"primitive\":\"string\"}}")]
            public string AccountId()
            {
                return InvokeInstanceMethod<string>(new System.Type[]{}, new object[]{})!;
            }

            /// <summary>Return the region.</summary>
            [JsiiMethod(name: "region", returnsJson: "{\"type\":{\"primitive\":\"string\"}}")]
            public string Region()
            {
                return InvokeInstanceMethod<string>(new System.Type[]{}, new object[]{})!;
            }
        }
    }
}

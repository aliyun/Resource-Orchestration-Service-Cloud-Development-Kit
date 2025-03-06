package com.aliyun.ros.cdk.ros;

/**
 * Represents a <code>WaitConditionHandle</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:10.204Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.IWaitConditionHandle")
@software.amazon.jsii.Jsii.Proxy(IWaitConditionHandle.Jsii$Proxy.class)
public interface IWaitConditionHandle extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CurlCli: Convenience attribute, provides curl CLI command prefix, which can be used for signalling handle completion or failure.
     * <p>
     * You can signal success by adding --data-binary '{"status": "SUCCESS"}' , or signal failure by adding --data-binary '{"status": "FAILURE"}'
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCurlCli();

    /**
     * Attribute Headers: HTTP POST Headers used for signalling handle completion or failure.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHeaders();

    /**
     * Attribute PowerShellCurlCli: Convenience attribute, provides curl CLI command prefix for PowerShell, which can be used for signalling handle completion or failure.
     * <p>
     * As this cmdlet was introduced in PowerShell 3.0, ensure the version of PowerShell satisfies the constraint. (Show the version via $PSVersionTable.PSVersion.) You can signal success by adding -Body '{"status": "SUCCESS"}' , or signal failure by adding -Body '{"status": "FAILURE"}'
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrPowerShellCurlCli();

    /**
     * Attribute URL: HTTP POST URL used for signalling handle completion or failure.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUrl();

    /**
     * Attribute WindowsCurlCli: Convenience attribute, provides curl CLI command prefix for Windows, which can be used for signalling handle completion or failure.
     * <p>
     * As Windows does not support curl command, you need to install curl.exe and add it to PATH first. You can signal success by adding --data-binary "{"status": "SUCCESS"}" , or signal failure by adding --data-binary "{"status": "FAILURE"}"
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrWindowsCurlCli();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.WaitConditionHandleProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ros.IWaitConditionHandle.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * The construct tree node for this construct.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute CurlCli: Convenience attribute, provides curl CLI command prefix, which can be used for signalling handle completion or failure.
         * <p>
         * You can signal success by adding --data-binary '{"status": "SUCCESS"}' , or signal failure by adding --data-binary '{"status": "FAILURE"}'
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCurlCli() {
            return software.amazon.jsii.Kernel.get(this, "attrCurlCli", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Headers: HTTP POST Headers used for signalling handle completion or failure.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHeaders() {
            return software.amazon.jsii.Kernel.get(this, "attrHeaders", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PowerShellCurlCli: Convenience attribute, provides curl CLI command prefix for PowerShell, which can be used for signalling handle completion or failure.
         * <p>
         * As this cmdlet was introduced in PowerShell 3.0, ensure the version of PowerShell satisfies the constraint. (Show the version via $PSVersionTable.PSVersion.) You can signal success by adding -Body '{"status": "SUCCESS"}' , or signal failure by adding -Body '{"status": "FAILURE"}'
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrPowerShellCurlCli() {
            return software.amazon.jsii.Kernel.get(this, "attrPowerShellCurlCli", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute URL: HTTP POST URL used for signalling handle completion or failure.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WindowsCurlCli: Convenience attribute, provides curl CLI command prefix for Windows, which can be used for signalling handle completion or failure.
         * <p>
         * As Windows does not support curl command, you need to install curl.exe and add it to PATH first. You can signal success by adding --data-binary "{"status": "SUCCESS"}" , or signal failure by adding --data-binary "{"status": "FAILURE"}"
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrWindowsCurlCli() {
            return software.amazon.jsii.Kernel.get(this, "attrWindowsCurlCli", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.WaitConditionHandleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ros.WaitConditionHandleProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IWaitConditionHandle}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IWaitConditionHandle, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

        /**
         * The construct tree node for this construct.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute CurlCli: Convenience attribute, provides curl CLI command prefix, which can be used for signalling handle completion or failure.
         * <p>
         * You can signal success by adding --data-binary '{"status": "SUCCESS"}' , or signal failure by adding --data-binary '{"status": "FAILURE"}'
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCurlCli() {
            return software.amazon.jsii.Kernel.get(this, "attrCurlCli", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Headers: HTTP POST Headers used for signalling handle completion or failure.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHeaders() {
            return software.amazon.jsii.Kernel.get(this, "attrHeaders", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute PowerShellCurlCli: Convenience attribute, provides curl CLI command prefix for PowerShell, which can be used for signalling handle completion or failure.
         * <p>
         * As this cmdlet was introduced in PowerShell 3.0, ensure the version of PowerShell satisfies the constraint. (Show the version via $PSVersionTable.PSVersion.) You can signal success by adding -Body '{"status": "SUCCESS"}' , or signal failure by adding -Body '{"status": "FAILURE"}'
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrPowerShellCurlCli() {
            return software.amazon.jsii.Kernel.get(this, "attrPowerShellCurlCli", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute URL: HTTP POST URL used for signalling handle completion or failure.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUrl() {
            return software.amazon.jsii.Kernel.get(this, "attrUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute WindowsCurlCli: Convenience attribute, provides curl CLI command prefix for Windows, which can be used for signalling handle completion or failure.
         * <p>
         * As Windows does not support curl command, you need to install curl.exe and add it to PATH first. You can signal success by adding --data-binary "{"status": "SUCCESS"}" , or signal failure by adding --data-binary "{"status": "FAILURE"}"
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrWindowsCurlCli() {
            return software.amazon.jsii.Kernel.get(this, "attrWindowsCurlCli", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.WaitConditionHandleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ros.WaitConditionHandleProps.class));
        }
    }
}

package com.aliyun.ros.cdk.cloudsso;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CloudSSO::PermissionPolicyToAccessConfigurationAddition</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:31.001Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudsso.$Module.class, fqn = "@alicloud/ros-cdk-cloudsso.PermissionPolicyToAccessConfigurationAddition")
public class PermissionPolicyToAccessConfigurationAddition extends com.aliyun.ros.cdk.core.Resource {

    protected PermissionPolicyToAccessConfigurationAddition(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected PermissionPolicyToAccessConfigurationAddition(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public PermissionPolicyToAccessConfigurationAddition(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudsso.PermissionPolicyToAccessConfigurationAdditionProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public PermissionPolicyToAccessConfigurationAddition(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudsso.PermissionPolicyToAccessConfigurationAdditionProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudsso.PermissionPolicyToAccessConfigurationAdditionProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cloudsso.PermissionPolicyToAccessConfigurationAdditionProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudsso.PermissionPolicyToAccessConfigurationAdditionProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudsso.PermissionPolicyToAccessConfigurationAddition}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudsso.PermissionPolicyToAccessConfigurationAddition> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.cloudsso.PermissionPolicyToAccessConfigurationAdditionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cloudsso.PermissionPolicyToAccessConfigurationAdditionProps.Builder();
        }

        /**
         * Property accessConfigurationId: The ID of the access configuration.
         * <p>
         * @return {@code this}
         * @param accessConfigurationId Property accessConfigurationId: The ID of the access configuration. This parameter is required.
         */
        public Builder accessConfigurationId(final java.lang.String accessConfigurationId) {
            this.props.accessConfigurationId(accessConfigurationId);
            return this;
        }
        /**
         * Property accessConfigurationId: The ID of the access configuration.
         * <p>
         * @return {@code this}
         * @param accessConfigurationId Property accessConfigurationId: The ID of the access configuration. This parameter is required.
         */
        public Builder accessConfigurationId(final com.aliyun.ros.cdk.core.IResolvable accessConfigurationId) {
            this.props.accessConfigurationId(accessConfigurationId);
            return this;
        }

        /**
         * Property directoryId: The ID of the directory.
         * <p>
         * @return {@code this}
         * @param directoryId Property directoryId: The ID of the directory. This parameter is required.
         */
        public Builder directoryId(final java.lang.String directoryId) {
            this.props.directoryId(directoryId);
            return this;
        }
        /**
         * Property directoryId: The ID of the directory.
         * <p>
         * @return {@code this}
         * @param directoryId Property directoryId: The ID of the directory. This parameter is required.
         */
        public Builder directoryId(final com.aliyun.ros.cdk.core.IResolvable directoryId) {
            this.props.directoryId(directoryId);
            return this;
        }

        /**
         * Property permissionPolicyName: The name of the permission policy.
         * <p>
         * <ul>
         * <li>If you set PermissionPolicyType to System, you must set this parameter to the name of the system policy. You can obtain the name of the system policy from RAM.</li>
         * <li>If you set PermissionPolicyType to Inline, you must set this parameter to the name of the inline policy. A custom value is supported.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param permissionPolicyName Property permissionPolicyName: The name of the permission policy. This parameter is required.
         */
        public Builder permissionPolicyName(final java.lang.String permissionPolicyName) {
            this.props.permissionPolicyName(permissionPolicyName);
            return this;
        }
        /**
         * Property permissionPolicyName: The name of the permission policy.
         * <p>
         * <ul>
         * <li>If you set PermissionPolicyType to System, you must set this parameter to the name of the system policy. You can obtain the name of the system policy from RAM.</li>
         * <li>If you set PermissionPolicyType to Inline, you must set this parameter to the name of the inline policy. A custom value is supported.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param permissionPolicyName Property permissionPolicyName: The name of the permission policy. This parameter is required.
         */
        public Builder permissionPolicyName(final com.aliyun.ros.cdk.core.IResolvable permissionPolicyName) {
            this.props.permissionPolicyName(permissionPolicyName);
            return this;
        }

        /**
         * Property permissionPolicyType: The type of the permission policy.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>System: system policy. Resource Access Management (RAM) system policies are reused.</li>
         * <li>Inline: inline policy. Inline policies are created based on the RAM policy syntax and structure.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param permissionPolicyType Property permissionPolicyType: The type of the permission policy. This parameter is required.
         */
        public Builder permissionPolicyType(final java.lang.String permissionPolicyType) {
            this.props.permissionPolicyType(permissionPolicyType);
            return this;
        }
        /**
         * Property permissionPolicyType: The type of the permission policy.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>System: system policy. Resource Access Management (RAM) system policies are reused.</li>
         * <li>Inline: inline policy. Inline policies are created based on the RAM policy syntax and structure.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param permissionPolicyType Property permissionPolicyType: The type of the permission policy. This parameter is required.
         */
        public Builder permissionPolicyType(final com.aliyun.ros.cdk.core.IResolvable permissionPolicyType) {
            this.props.permissionPolicyType(permissionPolicyType);
            return this;
        }

        /**
         * Property inlinePolicyDocument: The configurations of the inline policy.
         * <p>
         * The value can be up to 4,096 characters in length.
         * If you set PermissionPolicyType to Inline, you must specify this parameter.
         * <p>
         * @return {@code this}
         * @param inlinePolicyDocument Property inlinePolicyDocument: The configurations of the inline policy. This parameter is required.
         */
        public Builder inlinePolicyDocument(final com.aliyun.ros.cdk.core.IResolvable inlinePolicyDocument) {
            this.props.inlinePolicyDocument(inlinePolicyDocument);
            return this;
        }
        /**
         * Property inlinePolicyDocument: The configurations of the inline policy.
         * <p>
         * The value can be up to 4,096 characters in length.
         * If you set PermissionPolicyType to Inline, you must specify this parameter.
         * <p>
         * @return {@code this}
         * @param inlinePolicyDocument Property inlinePolicyDocument: The configurations of the inline policy. This parameter is required.
         */
        public Builder inlinePolicyDocument(final java.util.Map<java.lang.String, ? extends java.lang.Object> inlinePolicyDocument) {
            this.props.inlinePolicyDocument(inlinePolicyDocument);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudsso.PermissionPolicyToAccessConfigurationAddition}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudsso.PermissionPolicyToAccessConfigurationAddition build() {
            return new com.aliyun.ros.cdk.cloudsso.PermissionPolicyToAccessConfigurationAddition(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

package com.aliyun.ros.cdk.fc;

/**
 * A ROS resource type:  `ALIYUN::FC::Alias`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-13T06:46:15.068Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.Alias")
public class Alias extends com.aliyun.ros.cdk.core.Resource {

    protected Alias(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Alias(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::FC::Alias`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Alias(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.AliasProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::FC::Alias`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Alias(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.AliasProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AliasName: The alias name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAliasName() {
        return software.amazon.jsii.Kernel.get(this, "attrAliasName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ServiceName: The service name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrServiceName() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VersionId: The version ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVersionId() {
        return software.amazon.jsii.Kernel.get(this, "attrVersionId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.fc.Alias}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.fc.Alias> {
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
        private final com.aliyun.ros.cdk.fc.AliasProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.fc.AliasProps.Builder();
        }

        /**
         * Property aliasName: Alias name.
         * <p>
         * @return {@code this}
         * @param aliasName Property aliasName: Alias name. This parameter is required.
         */
        public Builder aliasName(final java.lang.String aliasName) {
            this.props.aliasName(aliasName);
            return this;
        }
        /**
         * Property aliasName: Alias name.
         * <p>
         * @return {@code this}
         * @param aliasName Property aliasName: Alias name. This parameter is required.
         */
        public Builder aliasName(final com.aliyun.ros.cdk.core.IResolvable aliasName) {
            this.props.aliasName(aliasName);
            return this;
        }

        /**
         * Property serviceName: Service name.
         * <p>
         * @return {@code this}
         * @param serviceName Property serviceName: Service name. This parameter is required.
         */
        public Builder serviceName(final java.lang.String serviceName) {
            this.props.serviceName(serviceName);
            return this;
        }
        /**
         * Property serviceName: Service name.
         * <p>
         * @return {@code this}
         * @param serviceName Property serviceName: Service name. This parameter is required.
         */
        public Builder serviceName(final com.aliyun.ros.cdk.core.IResolvable serviceName) {
            this.props.serviceName(serviceName);
            return this;
        }

        /**
         * Property additionalVersion: Additional version.
         * <p>
         * @return {@code this}
         * @param additionalVersion Property additionalVersion: Additional version. This parameter is required.
         */
        public Builder additionalVersion(final java.lang.String additionalVersion) {
            this.props.additionalVersion(additionalVersion);
            return this;
        }
        /**
         * Property additionalVersion: Additional version.
         * <p>
         * @return {@code this}
         * @param additionalVersion Property additionalVersion: Additional version. This parameter is required.
         */
        public Builder additionalVersion(final com.aliyun.ros.cdk.core.IResolvable additionalVersion) {
            this.props.additionalVersion(additionalVersion);
            return this;
        }

        /**
         * Property additionalWeight: Traffic weight of additional version.
         * <p>
         * From 0 to 100.
         * <p>
         * @return {@code this}
         * @param additionalWeight Property additionalWeight: Traffic weight of additional version. This parameter is required.
         */
        public Builder additionalWeight(final java.lang.Number additionalWeight) {
            this.props.additionalWeight(additionalWeight);
            return this;
        }
        /**
         * Property additionalWeight: Traffic weight of additional version.
         * <p>
         * From 0 to 100.
         * <p>
         * @return {@code this}
         * @param additionalWeight Property additionalWeight: Traffic weight of additional version. This parameter is required.
         */
        public Builder additionalWeight(final com.aliyun.ros.cdk.core.IResolvable additionalWeight) {
            this.props.additionalWeight(additionalWeight);
            return this;
        }

        /**
         * Property description: Version description.
         * <p>
         * @return {@code this}
         * @param description Property description: Version description. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Version description.
         * <p>
         * @return {@code this}
         * @param description Property description: Version description. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property versionId: Version ID.
         * <p>
         * @return {@code this}
         * @param versionId Property versionId: Version ID. This parameter is required.
         */
        public Builder versionId(final java.lang.String versionId) {
            this.props.versionId(versionId);
            return this;
        }
        /**
         * Property versionId: Version ID.
         * <p>
         * @return {@code this}
         * @param versionId Property versionId: Version ID. This parameter is required.
         */
        public Builder versionId(final com.aliyun.ros.cdk.core.IResolvable versionId) {
            this.props.versionId(versionId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.fc.Alias}.
         */
        @Override
        public com.aliyun.ros.cdk.fc.Alias build() {
            return new com.aliyun.ros.cdk.fc.Alias(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

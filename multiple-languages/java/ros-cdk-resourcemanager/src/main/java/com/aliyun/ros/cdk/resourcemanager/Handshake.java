package com.aliyun.ros.cdk.resourcemanager;

/**
 * A ROS resource type:  <code>ALIYUN::ResourceManager::Handshake</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T05:23:26.676Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.Handshake")
public class Handshake extends com.aliyun.ros.cdk.core.Resource {

    protected Handshake(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Handshake(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::ResourceManager::Handshake</code>.
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
    public Handshake(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.HandshakeProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::ResourceManager::Handshake</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Handshake(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.HandshakeProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute HandshakeId: This ID of Resource Manager handshake.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHandshakeId() {
        return software.amazon.jsii.Kernel.get(this, "attrHandshakeId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute MasterAccountId: Resource account master account ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMasterAccountId() {
        return software.amazon.jsii.Kernel.get(this, "attrMasterAccountId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute MasterAccountName: The name of the main account of the resource directory.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMasterAccountName() {
        return software.amazon.jsii.Kernel.get(this, "attrMasterAccountName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Note: Remarks.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNote() {
        return software.amazon.jsii.Kernel.get(this, "attrNote", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ResourceDirectoryId: Resource directory ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceDirectoryId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceDirectoryId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TargetEntity: Invited account ID or login email.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTargetEntity() {
        return software.amazon.jsii.Kernel.get(this, "attrTargetEntity", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TargetType: Type of account being invited.
     * <p>
     * Valid values: Account, Email
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTargetType() {
        return software.amazon.jsii.Kernel.get(this, "attrTargetType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.resourcemanager.Handshake}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.resourcemanager.Handshake> {
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
        private final com.aliyun.ros.cdk.resourcemanager.HandshakeProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.resourcemanager.HandshakeProps.Builder();
        }

        /**
         * Property targetEntity: Invited account ID or login email.
         * <p>
         * @return {@code this}
         * @param targetEntity Property targetEntity: Invited account ID or login email. This parameter is required.
         */
        public Builder targetEntity(final java.lang.String targetEntity) {
            this.props.targetEntity(targetEntity);
            return this;
        }
        /**
         * Property targetEntity: Invited account ID or login email.
         * <p>
         * @return {@code this}
         * @param targetEntity Property targetEntity: Invited account ID or login email. This parameter is required.
         */
        public Builder targetEntity(final com.aliyun.ros.cdk.core.IResolvable targetEntity) {
            this.props.targetEntity(targetEntity);
            return this;
        }

        /**
         * Property targetType: Type of account being invited.
         * <p>
         * Valid values: Account, Email
         * <p>
         * @return {@code this}
         * @param targetType Property targetType: Type of account being invited. This parameter is required.
         */
        public Builder targetType(final java.lang.String targetType) {
            this.props.targetType(targetType);
            return this;
        }
        /**
         * Property targetType: Type of account being invited.
         * <p>
         * Valid values: Account, Email
         * <p>
         * @return {@code this}
         * @param targetType Property targetType: Type of account being invited. This parameter is required.
         */
        public Builder targetType(final com.aliyun.ros.cdk.core.IResolvable targetType) {
            this.props.targetType(targetType);
            return this;
        }

        /**
         * Property note: Remarks.
         * <p>
         * @return {@code this}
         * @param note Property note: Remarks. This parameter is required.
         */
        public Builder note(final java.lang.String note) {
            this.props.note(note);
            return this;
        }
        /**
         * Property note: Remarks.
         * <p>
         * @return {@code this}
         * @param note Property note: Remarks. This parameter is required.
         */
        public Builder note(final com.aliyun.ros.cdk.core.IResolvable note) {
            this.props.note(note);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.resourcemanager.Handshake}.
         */
        @Override
        public com.aliyun.ros.cdk.resourcemanager.Handshake build() {
            return new com.aliyun.ros.cdk.resourcemanager.Handshake(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}

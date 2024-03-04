package com.aliyun.ros.cdk.cloudsso;

/**
 * Properties for defining a <code>UserProvision</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-userprovision
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-03-01T09:16:50.660Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudsso.$Module.class, fqn = "@alicloud/ros-cdk-cloudsso.UserProvisionProps")
@software.amazon.jsii.Jsii.Proxy(UserProvisionProps.Jsii$Proxy.class)
public interface UserProvisionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property deletionStrategy: Delete policy.
     * <p>
     * The treatment strategy for the synchronized RAM users when the RAM user synchronization is removed. Valid values:
     * <p>
     * <ul>
     * <li>Delete: Delete When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are deleted.</li>
     * <li>Keep: When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are retained.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDeletionStrategy();

    /**
     * Property directoryId: The ID of the directory.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDirectoryId();

    /**
     * Property duplicationStrategy: Conflict policy.
     * <p>
     * When the cloud SSO user is synchronized to the RAM, the processing strategy if there is a user with the same name in the RAM. Valid values:
     * <p>
     * <ul>
     * <li>KeepBoth: Keep both of them. When the cloud SSO user is synchronized to RAM, if the RAM already has a user with the same name, it will try to create a RAM user with the user name after adding the suffix _sso to the user name of the cloud SSO user.</li>
     * <li>TakeOver: Take over. When the cloud SSO user is synchronized to the RAM, if the RAM already has a user with the same name, the existing RAM user is directly replaced by the cloud SSO synchronization user.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDuplicationStrategy();

    /**
     * Property principalId: The ID of the principal.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>When the PrincipalType value is Group, the value is the cloud SSO user group ID (g-********).</li>
     * <li>When PrincipalType takes the value User, this value is the cloud SSO user ID (u-********).</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPrincipalId();

    /**
     * Property principalType: The type of the principal.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>User: The principal is a cloud SSO user.</li>
     * <li>Group: The principal is a cloud SSO group.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPrincipalType();

    /**
     * Property targetId: Target ID for RAM user synchronization.
     * <p>
     * Currently, it is the RD account ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTargetId();

    /**
     * Property targetType: Target type for RAM user synchronization.
     * <p>
     * Currently, it is RD-Account.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTargetType();

    /**
     * Property description: The description of the user.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link UserProvisionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link UserProvisionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<UserProvisionProps> {
        java.lang.Object deletionStrategy;
        java.lang.Object directoryId;
        java.lang.Object duplicationStrategy;
        java.lang.Object principalId;
        java.lang.Object principalType;
        java.lang.Object targetId;
        java.lang.Object targetType;
        java.lang.Object description;

        /**
         * Sets the value of {@link UserProvisionProps#getDeletionStrategy}
         * @param deletionStrategy Property deletionStrategy: Delete policy. This parameter is required.
         *                         The treatment strategy for the synchronized RAM users when the RAM user synchronization is removed. Valid values:
         *                         <p>
         *                         <ul>
         *                         <li>Delete: Delete When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are deleted.</li>
         *                         <li>Keep: When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are retained.</li>
         *                         </ul>
         * @return {@code this}
         */
        public Builder deletionStrategy(java.lang.String deletionStrategy) {
            this.deletionStrategy = deletionStrategy;
            return this;
        }

        /**
         * Sets the value of {@link UserProvisionProps#getDeletionStrategy}
         * @param deletionStrategy Property deletionStrategy: Delete policy. This parameter is required.
         *                         The treatment strategy for the synchronized RAM users when the RAM user synchronization is removed. Valid values:
         *                         <p>
         *                         <ul>
         *                         <li>Delete: Delete When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are deleted.</li>
         *                         <li>Keep: When the RAM user synchronization is removed, the RAM users that have been synchronized to the RAM from the cloud SSO are retained.</li>
         *                         </ul>
         * @return {@code this}
         */
        public Builder deletionStrategy(com.aliyun.ros.cdk.core.IResolvable deletionStrategy) {
            this.deletionStrategy = deletionStrategy;
            return this;
        }

        /**
         * Sets the value of {@link UserProvisionProps#getDirectoryId}
         * @param directoryId Property directoryId: The ID of the directory. This parameter is required.
         * @return {@code this}
         */
        public Builder directoryId(java.lang.String directoryId) {
            this.directoryId = directoryId;
            return this;
        }

        /**
         * Sets the value of {@link UserProvisionProps#getDirectoryId}
         * @param directoryId Property directoryId: The ID of the directory. This parameter is required.
         * @return {@code this}
         */
        public Builder directoryId(com.aliyun.ros.cdk.core.IResolvable directoryId) {
            this.directoryId = directoryId;
            return this;
        }

        /**
         * Sets the value of {@link UserProvisionProps#getDuplicationStrategy}
         * @param duplicationStrategy Property duplicationStrategy: Conflict policy. This parameter is required.
         *                            When the cloud SSO user is synchronized to the RAM, the processing strategy if there is a user with the same name in the RAM. Valid values:
         *                            <p>
         *                            <ul>
         *                            <li>KeepBoth: Keep both of them. When the cloud SSO user is synchronized to RAM, if the RAM already has a user with the same name, it will try to create a RAM user with the user name after adding the suffix _sso to the user name of the cloud SSO user.</li>
         *                            <li>TakeOver: Take over. When the cloud SSO user is synchronized to the RAM, if the RAM already has a user with the same name, the existing RAM user is directly replaced by the cloud SSO synchronization user.</li>
         *                            </ul>
         * @return {@code this}
         */
        public Builder duplicationStrategy(java.lang.String duplicationStrategy) {
            this.duplicationStrategy = duplicationStrategy;
            return this;
        }

        /**
         * Sets the value of {@link UserProvisionProps#getDuplicationStrategy}
         * @param duplicationStrategy Property duplicationStrategy: Conflict policy. This parameter is required.
         *                            When the cloud SSO user is synchronized to the RAM, the processing strategy if there is a user with the same name in the RAM. Valid values:
         *                            <p>
         *                            <ul>
         *                            <li>KeepBoth: Keep both of them. When the cloud SSO user is synchronized to RAM, if the RAM already has a user with the same name, it will try to create a RAM user with the user name after adding the suffix _sso to the user name of the cloud SSO user.</li>
         *                            <li>TakeOver: Take over. When the cloud SSO user is synchronized to the RAM, if the RAM already has a user with the same name, the existing RAM user is directly replaced by the cloud SSO synchronization user.</li>
         *                            </ul>
         * @return {@code this}
         */
        public Builder duplicationStrategy(com.aliyun.ros.cdk.core.IResolvable duplicationStrategy) {
            this.duplicationStrategy = duplicationStrategy;
            return this;
        }

        /**
         * Sets the value of {@link UserProvisionProps#getPrincipalId}
         * @param principalId Property principalId: The ID of the principal. This parameter is required.
         *                    Valid values:
         *                    <p>
         *                    <ul>
         *                    <li>When the PrincipalType value is Group, the value is the cloud SSO user group ID (g-********).</li>
         *                    <li>When PrincipalType takes the value User, this value is the cloud SSO user ID (u-********).</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder principalId(java.lang.String principalId) {
            this.principalId = principalId;
            return this;
        }

        /**
         * Sets the value of {@link UserProvisionProps#getPrincipalId}
         * @param principalId Property principalId: The ID of the principal. This parameter is required.
         *                    Valid values:
         *                    <p>
         *                    <ul>
         *                    <li>When the PrincipalType value is Group, the value is the cloud SSO user group ID (g-********).</li>
         *                    <li>When PrincipalType takes the value User, this value is the cloud SSO user ID (u-********).</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder principalId(com.aliyun.ros.cdk.core.IResolvable principalId) {
            this.principalId = principalId;
            return this;
        }

        /**
         * Sets the value of {@link UserProvisionProps#getPrincipalType}
         * @param principalType Property principalType: The type of the principal. This parameter is required.
         *                      Valid values:
         *                      <p>
         *                      <ul>
         *                      <li>User: The principal is a cloud SSO user.</li>
         *                      <li>Group: The principal is a cloud SSO group.</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder principalType(java.lang.String principalType) {
            this.principalType = principalType;
            return this;
        }

        /**
         * Sets the value of {@link UserProvisionProps#getPrincipalType}
         * @param principalType Property principalType: The type of the principal. This parameter is required.
         *                      Valid values:
         *                      <p>
         *                      <ul>
         *                      <li>User: The principal is a cloud SSO user.</li>
         *                      <li>Group: The principal is a cloud SSO group.</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder principalType(com.aliyun.ros.cdk.core.IResolvable principalType) {
            this.principalType = principalType;
            return this;
        }

        /**
         * Sets the value of {@link UserProvisionProps#getTargetId}
         * @param targetId Property targetId: Target ID for RAM user synchronization. This parameter is required.
         *                 Currently, it is the RD account ID.
         * @return {@code this}
         */
        public Builder targetId(java.lang.String targetId) {
            this.targetId = targetId;
            return this;
        }

        /**
         * Sets the value of {@link UserProvisionProps#getTargetId}
         * @param targetId Property targetId: Target ID for RAM user synchronization. This parameter is required.
         *                 Currently, it is the RD account ID.
         * @return {@code this}
         */
        public Builder targetId(com.aliyun.ros.cdk.core.IResolvable targetId) {
            this.targetId = targetId;
            return this;
        }

        /**
         * Sets the value of {@link UserProvisionProps#getTargetType}
         * @param targetType Property targetType: Target type for RAM user synchronization. This parameter is required.
         *                   Currently, it is RD-Account.
         * @return {@code this}
         */
        public Builder targetType(java.lang.String targetType) {
            this.targetType = targetType;
            return this;
        }

        /**
         * Sets the value of {@link UserProvisionProps#getTargetType}
         * @param targetType Property targetType: Target type for RAM user synchronization. This parameter is required.
         *                   Currently, it is RD-Account.
         * @return {@code this}
         */
        public Builder targetType(com.aliyun.ros.cdk.core.IResolvable targetType) {
            this.targetType = targetType;
            return this;
        }

        /**
         * Sets the value of {@link UserProvisionProps#getDescription}
         * @param description Property description: The description of the user.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link UserProvisionProps#getDescription}
         * @param description Property description: The description of the user.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link UserProvisionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public UserProvisionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link UserProvisionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements UserProvisionProps {
        private final java.lang.Object deletionStrategy;
        private final java.lang.Object directoryId;
        private final java.lang.Object duplicationStrategy;
        private final java.lang.Object principalId;
        private final java.lang.Object principalType;
        private final java.lang.Object targetId;
        private final java.lang.Object targetType;
        private final java.lang.Object description;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.deletionStrategy = software.amazon.jsii.Kernel.get(this, "deletionStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.directoryId = software.amazon.jsii.Kernel.get(this, "directoryId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.duplicationStrategy = software.amazon.jsii.Kernel.get(this, "duplicationStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.principalId = software.amazon.jsii.Kernel.get(this, "principalId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.principalType = software.amazon.jsii.Kernel.get(this, "principalType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targetId = software.amazon.jsii.Kernel.get(this, "targetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targetType = software.amazon.jsii.Kernel.get(this, "targetType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.deletionStrategy = java.util.Objects.requireNonNull(builder.deletionStrategy, "deletionStrategy is required");
            this.directoryId = java.util.Objects.requireNonNull(builder.directoryId, "directoryId is required");
            this.duplicationStrategy = java.util.Objects.requireNonNull(builder.duplicationStrategy, "duplicationStrategy is required");
            this.principalId = java.util.Objects.requireNonNull(builder.principalId, "principalId is required");
            this.principalType = java.util.Objects.requireNonNull(builder.principalType, "principalType is required");
            this.targetId = java.util.Objects.requireNonNull(builder.targetId, "targetId is required");
            this.targetType = java.util.Objects.requireNonNull(builder.targetType, "targetType is required");
            this.description = builder.description;
        }

        @Override
        public final java.lang.Object getDeletionStrategy() {
            return this.deletionStrategy;
        }

        @Override
        public final java.lang.Object getDirectoryId() {
            return this.directoryId;
        }

        @Override
        public final java.lang.Object getDuplicationStrategy() {
            return this.duplicationStrategy;
        }

        @Override
        public final java.lang.Object getPrincipalId() {
            return this.principalId;
        }

        @Override
        public final java.lang.Object getPrincipalType() {
            return this.principalType;
        }

        @Override
        public final java.lang.Object getTargetId() {
            return this.targetId;
        }

        @Override
        public final java.lang.Object getTargetType() {
            return this.targetType;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("deletionStrategy", om.valueToTree(this.getDeletionStrategy()));
            data.set("directoryId", om.valueToTree(this.getDirectoryId()));
            data.set("duplicationStrategy", om.valueToTree(this.getDuplicationStrategy()));
            data.set("principalId", om.valueToTree(this.getPrincipalId()));
            data.set("principalType", om.valueToTree(this.getPrincipalType()));
            data.set("targetId", om.valueToTree(this.getTargetId()));
            data.set("targetType", om.valueToTree(this.getTargetType()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cloudsso.UserProvisionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            UserProvisionProps.Jsii$Proxy that = (UserProvisionProps.Jsii$Proxy) o;

            if (!deletionStrategy.equals(that.deletionStrategy)) return false;
            if (!directoryId.equals(that.directoryId)) return false;
            if (!duplicationStrategy.equals(that.duplicationStrategy)) return false;
            if (!principalId.equals(that.principalId)) return false;
            if (!principalType.equals(that.principalType)) return false;
            if (!targetId.equals(that.targetId)) return false;
            if (!targetType.equals(that.targetType)) return false;
            return this.description != null ? this.description.equals(that.description) : that.description == null;
        }

        @Override
        public final int hashCode() {
            int result = this.deletionStrategy.hashCode();
            result = 31 * result + (this.directoryId.hashCode());
            result = 31 * result + (this.duplicationStrategy.hashCode());
            result = 31 * result + (this.principalId.hashCode());
            result = 31 * result + (this.principalType.hashCode());
            result = 31 * result + (this.targetId.hashCode());
            result = 31 * result + (this.targetType.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            return result;
        }
    }
}

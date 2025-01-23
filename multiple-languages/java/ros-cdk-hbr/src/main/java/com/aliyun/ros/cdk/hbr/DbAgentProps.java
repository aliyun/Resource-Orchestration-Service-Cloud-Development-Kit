package com.aliyun.ros.cdk.hbr;

/**
 * Properties for defining a <code>DbAgent</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbagent
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:40.730Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.DbAgentProps")
@software.amazon.jsii.Jsii.Proxy(DbAgentProps.Jsii$Proxy.class)
public interface DbAgentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceInfo: Instance infos.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceInfo();

    /**
     * Property crossAccountRoleName: The RAM role name that the original account created for cross-account backup operations.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCrossAccountRoleName() {
        return null;
    }

    /**
     * Property crossAccountType: The type of cross-account backup.
     * <p>
     * Supported values: SELF_ACCOUNT: backup within the same account; CROSS_ACCOUNT: cross-account backup. Example: CROSS_ACCOUNT
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCrossAccountType() {
        return null;
    }

    /**
     * Property crossAccountUserId: The user ID of the original account for cross-account backup operations.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCrossAccountUserId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DbAgentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DbAgentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DbAgentProps> {
        java.lang.Object instanceInfo;
        java.lang.Object crossAccountRoleName;
        java.lang.Object crossAccountType;
        java.lang.Object crossAccountUserId;

        /**
         * Sets the value of {@link DbAgentProps#getInstanceInfo}
         * @param instanceInfo Property instanceInfo: Instance infos. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceInfo(com.aliyun.ros.cdk.core.IResolvable instanceInfo) {
            this.instanceInfo = instanceInfo;
            return this;
        }

        /**
         * Sets the value of {@link DbAgentProps#getInstanceInfo}
         * @param instanceInfo Property instanceInfo: Instance infos. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceInfo(java.util.List<? extends java.lang.Object> instanceInfo) {
            this.instanceInfo = instanceInfo;
            return this;
        }

        /**
         * Sets the value of {@link DbAgentProps#getCrossAccountRoleName}
         * @param crossAccountRoleName Property crossAccountRoleName: The RAM role name that the original account created for cross-account backup operations.
         * @return {@code this}
         */
        public Builder crossAccountRoleName(java.lang.String crossAccountRoleName) {
            this.crossAccountRoleName = crossAccountRoleName;
            return this;
        }

        /**
         * Sets the value of {@link DbAgentProps#getCrossAccountRoleName}
         * @param crossAccountRoleName Property crossAccountRoleName: The RAM role name that the original account created for cross-account backup operations.
         * @return {@code this}
         */
        public Builder crossAccountRoleName(com.aliyun.ros.cdk.core.IResolvable crossAccountRoleName) {
            this.crossAccountRoleName = crossAccountRoleName;
            return this;
        }

        /**
         * Sets the value of {@link DbAgentProps#getCrossAccountType}
         * @param crossAccountType Property crossAccountType: The type of cross-account backup.
         *                         Supported values: SELF_ACCOUNT: backup within the same account; CROSS_ACCOUNT: cross-account backup. Example: CROSS_ACCOUNT
         * @return {@code this}
         */
        public Builder crossAccountType(java.lang.String crossAccountType) {
            this.crossAccountType = crossAccountType;
            return this;
        }

        /**
         * Sets the value of {@link DbAgentProps#getCrossAccountType}
         * @param crossAccountType Property crossAccountType: The type of cross-account backup.
         *                         Supported values: SELF_ACCOUNT: backup within the same account; CROSS_ACCOUNT: cross-account backup. Example: CROSS_ACCOUNT
         * @return {@code this}
         */
        public Builder crossAccountType(com.aliyun.ros.cdk.core.IResolvable crossAccountType) {
            this.crossAccountType = crossAccountType;
            return this;
        }

        /**
         * Sets the value of {@link DbAgentProps#getCrossAccountUserId}
         * @param crossAccountUserId Property crossAccountUserId: The user ID of the original account for cross-account backup operations.
         * @return {@code this}
         */
        public Builder crossAccountUserId(java.lang.Number crossAccountUserId) {
            this.crossAccountUserId = crossAccountUserId;
            return this;
        }

        /**
         * Sets the value of {@link DbAgentProps#getCrossAccountUserId}
         * @param crossAccountUserId Property crossAccountUserId: The user ID of the original account for cross-account backup operations.
         * @return {@code this}
         */
        public Builder crossAccountUserId(com.aliyun.ros.cdk.core.IResolvable crossAccountUserId) {
            this.crossAccountUserId = crossAccountUserId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DbAgentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DbAgentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DbAgentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DbAgentProps {
        private final java.lang.Object instanceInfo;
        private final java.lang.Object crossAccountRoleName;
        private final java.lang.Object crossAccountType;
        private final java.lang.Object crossAccountUserId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceInfo = software.amazon.jsii.Kernel.get(this, "instanceInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.crossAccountRoleName = software.amazon.jsii.Kernel.get(this, "crossAccountRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.crossAccountType = software.amazon.jsii.Kernel.get(this, "crossAccountType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.crossAccountUserId = software.amazon.jsii.Kernel.get(this, "crossAccountUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceInfo = java.util.Objects.requireNonNull(builder.instanceInfo, "instanceInfo is required");
            this.crossAccountRoleName = builder.crossAccountRoleName;
            this.crossAccountType = builder.crossAccountType;
            this.crossAccountUserId = builder.crossAccountUserId;
        }

        @Override
        public final java.lang.Object getInstanceInfo() {
            return this.instanceInfo;
        }

        @Override
        public final java.lang.Object getCrossAccountRoleName() {
            return this.crossAccountRoleName;
        }

        @Override
        public final java.lang.Object getCrossAccountType() {
            return this.crossAccountType;
        }

        @Override
        public final java.lang.Object getCrossAccountUserId() {
            return this.crossAccountUserId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceInfo", om.valueToTree(this.getInstanceInfo()));
            if (this.getCrossAccountRoleName() != null) {
                data.set("crossAccountRoleName", om.valueToTree(this.getCrossAccountRoleName()));
            }
            if (this.getCrossAccountType() != null) {
                data.set("crossAccountType", om.valueToTree(this.getCrossAccountType()));
            }
            if (this.getCrossAccountUserId() != null) {
                data.set("crossAccountUserId", om.valueToTree(this.getCrossAccountUserId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-hbr.DbAgentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DbAgentProps.Jsii$Proxy that = (DbAgentProps.Jsii$Proxy) o;

            if (!instanceInfo.equals(that.instanceInfo)) return false;
            if (this.crossAccountRoleName != null ? !this.crossAccountRoleName.equals(that.crossAccountRoleName) : that.crossAccountRoleName != null) return false;
            if (this.crossAccountType != null ? !this.crossAccountType.equals(that.crossAccountType) : that.crossAccountType != null) return false;
            return this.crossAccountUserId != null ? this.crossAccountUserId.equals(that.crossAccountUserId) : that.crossAccountUserId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceInfo.hashCode();
            result = 31 * result + (this.crossAccountRoleName != null ? this.crossAccountRoleName.hashCode() : 0);
            result = 31 * result + (this.crossAccountType != null ? this.crossAccountType.hashCode() : 0);
            result = 31 * result + (this.crossAccountUserId != null ? this.crossAccountUserId.hashCode() : 0);
            return result;
        }
    }
}

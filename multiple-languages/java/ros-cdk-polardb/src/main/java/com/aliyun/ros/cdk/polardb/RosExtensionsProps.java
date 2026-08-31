package com.aliyun.ros.cdk.polardb;

/**
 * Properties for defining a <code>RosExtensions</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-extensions
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T10:41:17.627Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.RosExtensionsProps")
@software.amazon.jsii.Jsii.Proxy(RosExtensionsProps.Jsii$Proxy.class)
public interface RosExtensionsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccountName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbClusterId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbNames();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExtensions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceDbName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosExtensionsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosExtensionsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosExtensionsProps> {
        java.lang.Object accountName;
        java.lang.Object dbClusterId;
        java.lang.Object dbNames;
        java.lang.Object extensions;
        java.lang.Object resourceGroupId;
        java.lang.Object sourceDbName;
        java.lang.Object vpcId;

        /**
         * Sets the value of {@link RosExtensionsProps#getAccountName}
         * @param accountName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accountName(java.lang.String accountName) {
            this.accountName = accountName;
            return this;
        }

        /**
         * Sets the value of {@link RosExtensionsProps#getAccountName}
         * @param accountName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accountName(com.aliyun.ros.cdk.core.IResolvable accountName) {
            this.accountName = accountName;
            return this;
        }

        /**
         * Sets the value of {@link RosExtensionsProps#getDbClusterId}
         * @param dbClusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(java.lang.String dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosExtensionsProps#getDbClusterId}
         * @param dbClusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbClusterId(com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.dbClusterId = dbClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosExtensionsProps#getDbNames}
         * @param dbNames the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbNames(com.aliyun.ros.cdk.core.IResolvable dbNames) {
            this.dbNames = dbNames;
            return this;
        }

        /**
         * Sets the value of {@link RosExtensionsProps#getDbNames}
         * @param dbNames the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbNames(java.util.List<? extends java.lang.Object> dbNames) {
            this.dbNames = dbNames;
            return this;
        }

        /**
         * Sets the value of {@link RosExtensionsProps#getExtensions}
         * @param extensions the value to be set.
         * @return {@code this}
         */
        public Builder extensions(com.aliyun.ros.cdk.core.IResolvable extensions) {
            this.extensions = extensions;
            return this;
        }

        /**
         * Sets the value of {@link RosExtensionsProps#getExtensions}
         * @param extensions the value to be set.
         * @return {@code this}
         */
        public Builder extensions(java.util.List<? extends java.lang.Object> extensions) {
            this.extensions = extensions;
            return this;
        }

        /**
         * Sets the value of {@link RosExtensionsProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosExtensionsProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosExtensionsProps#getSourceDbName}
         * @param sourceDbName the value to be set.
         * @return {@code this}
         */
        public Builder sourceDbName(java.lang.String sourceDbName) {
            this.sourceDbName = sourceDbName;
            return this;
        }

        /**
         * Sets the value of {@link RosExtensionsProps#getSourceDbName}
         * @param sourceDbName the value to be set.
         * @return {@code this}
         */
        public Builder sourceDbName(com.aliyun.ros.cdk.core.IResolvable sourceDbName) {
            this.sourceDbName = sourceDbName;
            return this;
        }

        /**
         * Sets the value of {@link RosExtensionsProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosExtensionsProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosExtensionsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosExtensionsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosExtensionsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosExtensionsProps {
        private final java.lang.Object accountName;
        private final java.lang.Object dbClusterId;
        private final java.lang.Object dbNames;
        private final java.lang.Object extensions;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object sourceDbName;
        private final java.lang.Object vpcId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accountName = software.amazon.jsii.Kernel.get(this, "accountName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbClusterId = software.amazon.jsii.Kernel.get(this, "dbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbNames = software.amazon.jsii.Kernel.get(this, "dbNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.extensions = software.amazon.jsii.Kernel.get(this, "extensions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceDbName = software.amazon.jsii.Kernel.get(this, "sourceDbName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accountName = java.util.Objects.requireNonNull(builder.accountName, "accountName is required");
            this.dbClusterId = java.util.Objects.requireNonNull(builder.dbClusterId, "dbClusterId is required");
            this.dbNames = java.util.Objects.requireNonNull(builder.dbNames, "dbNames is required");
            this.extensions = builder.extensions;
            this.resourceGroupId = builder.resourceGroupId;
            this.sourceDbName = builder.sourceDbName;
            this.vpcId = builder.vpcId;
        }

        @Override
        public final java.lang.Object getAccountName() {
            return this.accountName;
        }

        @Override
        public final java.lang.Object getDbClusterId() {
            return this.dbClusterId;
        }

        @Override
        public final java.lang.Object getDbNames() {
            return this.dbNames;
        }

        @Override
        public final java.lang.Object getExtensions() {
            return this.extensions;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSourceDbName() {
            return this.sourceDbName;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("accountName", om.valueToTree(this.getAccountName()));
            data.set("dbClusterId", om.valueToTree(this.getDbClusterId()));
            data.set("dbNames", om.valueToTree(this.getDbNames()));
            if (this.getExtensions() != null) {
                data.set("extensions", om.valueToTree(this.getExtensions()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSourceDbName() != null) {
                data.set("sourceDbName", om.valueToTree(this.getSourceDbName()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-polardb.RosExtensionsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosExtensionsProps.Jsii$Proxy that = (RosExtensionsProps.Jsii$Proxy) o;

            if (!accountName.equals(that.accountName)) return false;
            if (!dbClusterId.equals(that.dbClusterId)) return false;
            if (!dbNames.equals(that.dbNames)) return false;
            if (this.extensions != null ? !this.extensions.equals(that.extensions) : that.extensions != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.sourceDbName != null ? !this.sourceDbName.equals(that.sourceDbName) : that.sourceDbName != null) return false;
            return this.vpcId != null ? this.vpcId.equals(that.vpcId) : that.vpcId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.accountName.hashCode();
            result = 31 * result + (this.dbClusterId.hashCode());
            result = 31 * result + (this.dbNames.hashCode());
            result = 31 * result + (this.extensions != null ? this.extensions.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.sourceDbName != null ? this.sourceDbName.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            return result;
        }
    }
}

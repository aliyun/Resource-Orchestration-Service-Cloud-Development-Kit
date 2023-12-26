package com.aliyun.ros.cdk.dbs.datasource;

/**
 * Properties for defining a <code>RosBackupPlans</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dbs-backupplans
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:14.794Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dbs.$Module.class, fqn = "@alicloud/ros-cdk-dbs.datasource.RosBackupPlansProps")
@software.amazon.jsii.Jsii.Proxy(RosBackupPlansProps.Jsii$Proxy.class)
public interface RosBackupPlansProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackupPlanId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackupPlanName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosBackupPlansProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosBackupPlansProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosBackupPlansProps> {
        java.lang.Object backupPlanId;
        java.lang.Object backupPlanName;
        java.lang.Object resourceGroupId;

        /**
         * Sets the value of {@link RosBackupPlansProps#getBackupPlanId}
         * @param backupPlanId the value to be set.
         * @return {@code this}
         */
        public Builder backupPlanId(java.lang.String backupPlanId) {
            this.backupPlanId = backupPlanId;
            return this;
        }

        /**
         * Sets the value of {@link RosBackupPlansProps#getBackupPlanId}
         * @param backupPlanId the value to be set.
         * @return {@code this}
         */
        public Builder backupPlanId(com.aliyun.ros.cdk.core.IResolvable backupPlanId) {
            this.backupPlanId = backupPlanId;
            return this;
        }

        /**
         * Sets the value of {@link RosBackupPlansProps#getBackupPlanName}
         * @param backupPlanName the value to be set.
         * @return {@code this}
         */
        public Builder backupPlanName(java.lang.String backupPlanName) {
            this.backupPlanName = backupPlanName;
            return this;
        }

        /**
         * Sets the value of {@link RosBackupPlansProps#getBackupPlanName}
         * @param backupPlanName the value to be set.
         * @return {@code this}
         */
        public Builder backupPlanName(com.aliyun.ros.cdk.core.IResolvable backupPlanName) {
            this.backupPlanName = backupPlanName;
            return this;
        }

        /**
         * Sets the value of {@link RosBackupPlansProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosBackupPlansProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosBackupPlansProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosBackupPlansProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosBackupPlansProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosBackupPlansProps {
        private final java.lang.Object backupPlanId;
        private final java.lang.Object backupPlanName;
        private final java.lang.Object resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.backupPlanId = software.amazon.jsii.Kernel.get(this, "backupPlanId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backupPlanName = software.amazon.jsii.Kernel.get(this, "backupPlanName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.backupPlanId = builder.backupPlanId;
            this.backupPlanName = builder.backupPlanName;
            this.resourceGroupId = builder.resourceGroupId;
        }

        @Override
        public final java.lang.Object getBackupPlanId() {
            return this.backupPlanId;
        }

        @Override
        public final java.lang.Object getBackupPlanName() {
            return this.backupPlanName;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getBackupPlanId() != null) {
                data.set("backupPlanId", om.valueToTree(this.getBackupPlanId()));
            }
            if (this.getBackupPlanName() != null) {
                data.set("backupPlanName", om.valueToTree(this.getBackupPlanName()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dbs.datasource.RosBackupPlansProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosBackupPlansProps.Jsii$Proxy that = (RosBackupPlansProps.Jsii$Proxy) o;

            if (this.backupPlanId != null ? !this.backupPlanId.equals(that.backupPlanId) : that.backupPlanId != null) return false;
            if (this.backupPlanName != null ? !this.backupPlanName.equals(that.backupPlanName) : that.backupPlanName != null) return false;
            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.backupPlanId != null ? this.backupPlanId.hashCode() : 0;
            result = 31 * result + (this.backupPlanName != null ? this.backupPlanName.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            return result;
        }
    }
}

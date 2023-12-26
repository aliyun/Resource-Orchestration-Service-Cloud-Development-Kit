package com.aliyun.ros.cdk.hbr;

/**
 * Properties for defining a <code>RosBackupClients</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-backupclients
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:16.619Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.RosBackupClientsProps")
@software.amazon.jsii.Jsii.Proxy(RosBackupClientsProps.Jsii$Proxy.class)
public interface RosBackupClientsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceIds();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.hbr.RosBackupClients.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosBackupClientsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosBackupClientsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosBackupClientsProps> {
        java.lang.Object instanceIds;
        java.util.List<com.aliyun.ros.cdk.hbr.RosBackupClients.TagsProperty> tags;

        /**
         * Sets the value of {@link RosBackupClientsProps#getInstanceIds}
         * @param instanceIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceIds(com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link RosBackupClientsProps#getInstanceIds}
         * @param instanceIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceIds(java.util.List<? extends java.lang.Object> instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link RosBackupClientsProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.hbr.RosBackupClients.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.hbr.RosBackupClients.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosBackupClientsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosBackupClientsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosBackupClientsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosBackupClientsProps {
        private final java.lang.Object instanceIds;
        private final java.util.List<com.aliyun.ros.cdk.hbr.RosBackupClients.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceIds = software.amazon.jsii.Kernel.get(this, "instanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.hbr.RosBackupClients.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceIds = java.util.Objects.requireNonNull(builder.instanceIds, "instanceIds is required");
            this.tags = (java.util.List<com.aliyun.ros.cdk.hbr.RosBackupClients.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getInstanceIds() {
            return this.instanceIds;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.hbr.RosBackupClients.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceIds", om.valueToTree(this.getInstanceIds()));
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-hbr.RosBackupClientsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosBackupClientsProps.Jsii$Proxy that = (RosBackupClientsProps.Jsii$Proxy) o;

            if (!instanceIds.equals(that.instanceIds)) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceIds.hashCode();
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}

package com.aliyun.ros.cdk.nas.datasource;

/**
 * Properties for defining a <code>RosZones</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-zones
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:11.093Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nas.$Module.class, fqn = "@alicloud/ros-cdk-nas.datasource.RosZonesProps")
@software.amazon.jsii.Jsii.Proxy(RosZonesProps.Jsii$Proxy.class)
public interface RosZonesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFileSystemType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosZonesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosZonesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosZonesProps> {
        java.lang.Object fileSystemType;

        /**
         * Sets the value of {@link RosZonesProps#getFileSystemType}
         * @param fileSystemType the value to be set.
         * @return {@code this}
         */
        public Builder fileSystemType(java.lang.String fileSystemType) {
            this.fileSystemType = fileSystemType;
            return this;
        }

        /**
         * Sets the value of {@link RosZonesProps#getFileSystemType}
         * @param fileSystemType the value to be set.
         * @return {@code this}
         */
        public Builder fileSystemType(com.aliyun.ros.cdk.core.IResolvable fileSystemType) {
            this.fileSystemType = fileSystemType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosZonesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosZonesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosZonesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosZonesProps {
        private final java.lang.Object fileSystemType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.fileSystemType = software.amazon.jsii.Kernel.get(this, "fileSystemType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.fileSystemType = builder.fileSystemType;
        }

        @Override
        public final java.lang.Object getFileSystemType() {
            return this.fileSystemType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getFileSystemType() != null) {
                data.set("fileSystemType", om.valueToTree(this.getFileSystemType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nas.datasource.RosZonesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosZonesProps.Jsii$Proxy that = (RosZonesProps.Jsii$Proxy) o;

            return this.fileSystemType != null ? this.fileSystemType.equals(that.fileSystemType) : that.fileSystemType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.fileSystemType != null ? this.fileSystemType.hashCode() : 0;
            return result;
        }
    }
}

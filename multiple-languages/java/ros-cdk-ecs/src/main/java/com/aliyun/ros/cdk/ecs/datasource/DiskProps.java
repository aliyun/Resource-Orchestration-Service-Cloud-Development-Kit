package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Properties for defining a <code>Disk</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-disk
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:09.471Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.DiskProps")
@software.amazon.jsii.Jsii.Proxy(DiskProps.Jsii$Proxy.class)
public interface DiskProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property diskId: The disk id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDiskId();

    /**
     * @return a {@link Builder} of {@link DiskProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DiskProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DiskProps> {
        java.lang.Object diskId;

        /**
         * Sets the value of {@link DiskProps#getDiskId}
         * @param diskId Property diskId: The disk id. This parameter is required.
         * @return {@code this}
         */
        public Builder diskId(java.lang.String diskId) {
            this.diskId = diskId;
            return this;
        }

        /**
         * Sets the value of {@link DiskProps#getDiskId}
         * @param diskId Property diskId: The disk id. This parameter is required.
         * @return {@code this}
         */
        public Builder diskId(com.aliyun.ros.cdk.core.IResolvable diskId) {
            this.diskId = diskId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DiskProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DiskProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DiskProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DiskProps {
        private final java.lang.Object diskId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.diskId = software.amazon.jsii.Kernel.get(this, "diskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.diskId = java.util.Objects.requireNonNull(builder.diskId, "diskId is required");
        }

        @Override
        public final java.lang.Object getDiskId() {
            return this.diskId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("diskId", om.valueToTree(this.getDiskId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.datasource.DiskProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DiskProps.Jsii$Proxy that = (DiskProps.Jsii$Proxy) o;

            return this.diskId.equals(that.diskId);
        }

        @Override
        public final int hashCode() {
            int result = this.diskId.hashCode();
            return result;
        }
    }
}

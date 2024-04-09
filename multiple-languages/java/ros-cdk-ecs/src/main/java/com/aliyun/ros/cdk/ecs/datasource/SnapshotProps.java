package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Properties for defining a <code>Snapshot</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-snapshot
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:32.603Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.SnapshotProps")
@software.amazon.jsii.Jsii.Proxy(SnapshotProps.Jsii$Proxy.class)
public interface SnapshotProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property snapshotId: The snapshot id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSnapshotId();

    /**
     * @return a {@link Builder} of {@link SnapshotProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SnapshotProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SnapshotProps> {
        java.lang.Object snapshotId;

        /**
         * Sets the value of {@link SnapshotProps#getSnapshotId}
         * @param snapshotId Property snapshotId: The snapshot id. This parameter is required.
         * @return {@code this}
         */
        public Builder snapshotId(java.lang.String snapshotId) {
            this.snapshotId = snapshotId;
            return this;
        }

        /**
         * Sets the value of {@link SnapshotProps#getSnapshotId}
         * @param snapshotId Property snapshotId: The snapshot id. This parameter is required.
         * @return {@code this}
         */
        public Builder snapshotId(com.aliyun.ros.cdk.core.IResolvable snapshotId) {
            this.snapshotId = snapshotId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SnapshotProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SnapshotProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SnapshotProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SnapshotProps {
        private final java.lang.Object snapshotId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.snapshotId = software.amazon.jsii.Kernel.get(this, "snapshotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.snapshotId = java.util.Objects.requireNonNull(builder.snapshotId, "snapshotId is required");
        }

        @Override
        public final java.lang.Object getSnapshotId() {
            return this.snapshotId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("snapshotId", om.valueToTree(this.getSnapshotId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.datasource.SnapshotProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SnapshotProps.Jsii$Proxy that = (SnapshotProps.Jsii$Proxy) o;

            return this.snapshotId.equals(that.snapshotId);
        }

        @Override
        public final int hashCode() {
            int result = this.snapshotId.hashCode();
            return result;
        }
    }
}

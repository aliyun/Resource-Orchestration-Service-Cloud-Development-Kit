package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Properties for defining a <code>AutoSnapshotPolicy</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-autosnapshotpolicy
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:14.656Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.AutoSnapshotPolicyProps")
@software.amazon.jsii.Jsii.Proxy(AutoSnapshotPolicyProps.Jsii$Proxy.class)
public interface AutoSnapshotPolicyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property autoSnapshotPolicyId: The name of the automatic snapshot policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAutoSnapshotPolicyId();

    /**
     * @return a {@link Builder} of {@link AutoSnapshotPolicyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AutoSnapshotPolicyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AutoSnapshotPolicyProps> {
        java.lang.Object autoSnapshotPolicyId;

        /**
         * Sets the value of {@link AutoSnapshotPolicyProps#getAutoSnapshotPolicyId}
         * @param autoSnapshotPolicyId Property autoSnapshotPolicyId: The name of the automatic snapshot policy. This parameter is required.
         * @return {@code this}
         */
        public Builder autoSnapshotPolicyId(java.lang.String autoSnapshotPolicyId) {
            this.autoSnapshotPolicyId = autoSnapshotPolicyId;
            return this;
        }

        /**
         * Sets the value of {@link AutoSnapshotPolicyProps#getAutoSnapshotPolicyId}
         * @param autoSnapshotPolicyId Property autoSnapshotPolicyId: The name of the automatic snapshot policy. This parameter is required.
         * @return {@code this}
         */
        public Builder autoSnapshotPolicyId(com.aliyun.ros.cdk.core.IResolvable autoSnapshotPolicyId) {
            this.autoSnapshotPolicyId = autoSnapshotPolicyId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AutoSnapshotPolicyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AutoSnapshotPolicyProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AutoSnapshotPolicyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AutoSnapshotPolicyProps {
        private final java.lang.Object autoSnapshotPolicyId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.autoSnapshotPolicyId = software.amazon.jsii.Kernel.get(this, "autoSnapshotPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.autoSnapshotPolicyId = java.util.Objects.requireNonNull(builder.autoSnapshotPolicyId, "autoSnapshotPolicyId is required");
        }

        @Override
        public final java.lang.Object getAutoSnapshotPolicyId() {
            return this.autoSnapshotPolicyId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("autoSnapshotPolicyId", om.valueToTree(this.getAutoSnapshotPolicyId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.datasource.AutoSnapshotPolicyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AutoSnapshotPolicyProps.Jsii$Proxy that = (AutoSnapshotPolicyProps.Jsii$Proxy) o;

            return this.autoSnapshotPolicyId.equals(that.autoSnapshotPolicyId);
        }

        @Override
        public final int hashCode() {
            int result = this.autoSnapshotPolicyId.hashCode();
            return result;
        }
    }
}

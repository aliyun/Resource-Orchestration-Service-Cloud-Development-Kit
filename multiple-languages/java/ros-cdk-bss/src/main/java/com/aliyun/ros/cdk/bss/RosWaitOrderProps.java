package com.aliyun.ros.cdk.bss;

/**
 * Properties for defining a `ALIYUN::BSS::WaitOrder`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T01:43:49.473Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.bss.$Module.class, fqn = "@alicloud/ros-cdk-bss.RosWaitOrderProps")
@software.amazon.jsii.Jsii.Proxy(RosWaitOrderProps.Jsii$Proxy.class)
public interface RosWaitOrderProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOrderIds();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCancelOnDelete() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWaitForOrderProduced() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosWaitOrderProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosWaitOrderProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosWaitOrderProps> {
        java.lang.Object orderIds;
        java.lang.Object cancelOnDelete;
        java.lang.Object waitForOrderProduced;

        /**
         * Sets the value of {@link RosWaitOrderProps#getOrderIds}
         * @param orderIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder orderIds(java.util.List<? extends java.lang.Object> orderIds) {
            this.orderIds = orderIds;
            return this;
        }

        /**
         * Sets the value of {@link RosWaitOrderProps#getOrderIds}
         * @param orderIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder orderIds(com.aliyun.ros.cdk.core.IResolvable orderIds) {
            this.orderIds = orderIds;
            return this;
        }

        /**
         * Sets the value of {@link RosWaitOrderProps#getCancelOnDelete}
         * @param cancelOnDelete the value to be set.
         * @return {@code this}
         */
        public Builder cancelOnDelete(java.lang.Boolean cancelOnDelete) {
            this.cancelOnDelete = cancelOnDelete;
            return this;
        }

        /**
         * Sets the value of {@link RosWaitOrderProps#getCancelOnDelete}
         * @param cancelOnDelete the value to be set.
         * @return {@code this}
         */
        public Builder cancelOnDelete(com.aliyun.ros.cdk.core.IResolvable cancelOnDelete) {
            this.cancelOnDelete = cancelOnDelete;
            return this;
        }

        /**
         * Sets the value of {@link RosWaitOrderProps#getWaitForOrderProduced}
         * @param waitForOrderProduced the value to be set.
         * @return {@code this}
         */
        public Builder waitForOrderProduced(java.lang.Boolean waitForOrderProduced) {
            this.waitForOrderProduced = waitForOrderProduced;
            return this;
        }

        /**
         * Sets the value of {@link RosWaitOrderProps#getWaitForOrderProduced}
         * @param waitForOrderProduced the value to be set.
         * @return {@code this}
         */
        public Builder waitForOrderProduced(com.aliyun.ros.cdk.core.IResolvable waitForOrderProduced) {
            this.waitForOrderProduced = waitForOrderProduced;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosWaitOrderProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosWaitOrderProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosWaitOrderProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosWaitOrderProps {
        private final java.lang.Object orderIds;
        private final java.lang.Object cancelOnDelete;
        private final java.lang.Object waitForOrderProduced;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.orderIds = software.amazon.jsii.Kernel.get(this, "orderIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cancelOnDelete = software.amazon.jsii.Kernel.get(this, "cancelOnDelete", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.waitForOrderProduced = software.amazon.jsii.Kernel.get(this, "waitForOrderProduced", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.orderIds = java.util.Objects.requireNonNull(builder.orderIds, "orderIds is required");
            this.cancelOnDelete = builder.cancelOnDelete;
            this.waitForOrderProduced = builder.waitForOrderProduced;
        }

        @Override
        public final java.lang.Object getOrderIds() {
            return this.orderIds;
        }

        @Override
        public final java.lang.Object getCancelOnDelete() {
            return this.cancelOnDelete;
        }

        @Override
        public final java.lang.Object getWaitForOrderProduced() {
            return this.waitForOrderProduced;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("orderIds", om.valueToTree(this.getOrderIds()));
            if (this.getCancelOnDelete() != null) {
                data.set("cancelOnDelete", om.valueToTree(this.getCancelOnDelete()));
            }
            if (this.getWaitForOrderProduced() != null) {
                data.set("waitForOrderProduced", om.valueToTree(this.getWaitForOrderProduced()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-bss.RosWaitOrderProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosWaitOrderProps.Jsii$Proxy that = (RosWaitOrderProps.Jsii$Proxy) o;

            if (!orderIds.equals(that.orderIds)) return false;
            if (this.cancelOnDelete != null ? !this.cancelOnDelete.equals(that.cancelOnDelete) : that.cancelOnDelete != null) return false;
            return this.waitForOrderProduced != null ? this.waitForOrderProduced.equals(that.waitForOrderProduced) : that.waitForOrderProduced == null;
        }

        @Override
        public final int hashCode() {
            int result = this.orderIds.hashCode();
            result = 31 * result + (this.cancelOnDelete != null ? this.cancelOnDelete.hashCode() : 0);
            result = 31 * result + (this.waitForOrderProduced != null ? this.waitForOrderProduced.hashCode() : 0);
            return result;
        }
    }
}

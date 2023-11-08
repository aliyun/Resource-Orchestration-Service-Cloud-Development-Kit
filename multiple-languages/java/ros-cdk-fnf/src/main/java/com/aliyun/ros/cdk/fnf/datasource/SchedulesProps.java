package com.aliyun.ros.cdk.fnf.datasource;

/**
 * Properties for defining a <code>DATASOURCE::FNF::Schedules</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:35.694Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fnf.$Module.class, fqn = "@alicloud/ros-cdk-fnf.datasource.SchedulesProps")
@software.amazon.jsii.Jsii.Proxy(SchedulesProps.Jsii$Proxy.class)
public interface SchedulesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property flowName: The name of the flow that is bound to the time-based schedule.
     * <p>
     * The name is unique within the region and cannot be modified after the time-based schedule is created. Valid values:
     * The name can contain letters, digits, underscores (<em>), and hyphens (-).
     * The name must start with a letter or an underscore (</em>).
     * The name is case-sensitive.
     * The name must be 1 to 128 characters in length.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFlowName();

    /**
     * @return a {@link Builder} of {@link SchedulesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SchedulesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SchedulesProps> {
        java.lang.Object flowName;

        /**
         * Sets the value of {@link SchedulesProps#getFlowName}
         * @param flowName Property flowName: The name of the flow that is bound to the time-based schedule. This parameter is required.
         *                 The name is unique within the region and cannot be modified after the time-based schedule is created. Valid values:
         *                 The name can contain letters, digits, underscores (<em>), and hyphens (-).
         *                 The name must start with a letter or an underscore (</em>).
         *                 The name is case-sensitive.
         *                 The name must be 1 to 128 characters in length.
         * @return {@code this}
         */
        public Builder flowName(java.lang.String flowName) {
            this.flowName = flowName;
            return this;
        }

        /**
         * Sets the value of {@link SchedulesProps#getFlowName}
         * @param flowName Property flowName: The name of the flow that is bound to the time-based schedule. This parameter is required.
         *                 The name is unique within the region and cannot be modified after the time-based schedule is created. Valid values:
         *                 The name can contain letters, digits, underscores (<em>), and hyphens (-).
         *                 The name must start with a letter or an underscore (</em>).
         *                 The name is case-sensitive.
         *                 The name must be 1 to 128 characters in length.
         * @return {@code this}
         */
        public Builder flowName(com.aliyun.ros.cdk.core.IResolvable flowName) {
            this.flowName = flowName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SchedulesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SchedulesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SchedulesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SchedulesProps {
        private final java.lang.Object flowName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.flowName = software.amazon.jsii.Kernel.get(this, "flowName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.flowName = java.util.Objects.requireNonNull(builder.flowName, "flowName is required");
        }

        @Override
        public final java.lang.Object getFlowName() {
            return this.flowName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("flowName", om.valueToTree(this.getFlowName()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fnf.datasource.SchedulesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SchedulesProps.Jsii$Proxy that = (SchedulesProps.Jsii$Proxy) o;

            return this.flowName.equals(that.flowName);
        }

        @Override
        public final int hashCode() {
            int result = this.flowName.hashCode();
            return result;
        }
    }
}

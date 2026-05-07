package com.aliyun.ros.cdk.cdn;

/**
 * Properties for defining a <code>RosDeliverTask</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-delivertask
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:46.214Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cdn.$Module.class, fqn = "@alicloud/ros-cdk-cdn.RosDeliverTaskProps")
@software.amazon.jsii.Jsii.Proxy(RosDeliverTaskProps.Jsii$Proxy.class)
public interface RosDeliverTaskProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDeliver();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getReports();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSchedule();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDomainNames() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDeliverTaskProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDeliverTaskProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDeliverTaskProps> {
        java.lang.Object deliver;
        java.lang.Object name;
        java.lang.Object reports;
        java.lang.Object schedule;
        java.lang.Object domainNames;

        /**
         * Sets the value of {@link RosDeliverTaskProps#getDeliver}
         * @param deliver the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder deliver(com.aliyun.ros.cdk.core.IResolvable deliver) {
            this.deliver = deliver;
            return this;
        }

        /**
         * Sets the value of {@link RosDeliverTaskProps#getDeliver}
         * @param deliver the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder deliver(java.util.Map<java.lang.String, ? extends java.lang.Object> deliver) {
            this.deliver = deliver;
            return this;
        }

        /**
         * Sets the value of {@link RosDeliverTaskProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosDeliverTaskProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosDeliverTaskProps#getReports}
         * @param reports the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder reports(java.util.List<? extends java.lang.Object> reports) {
            this.reports = reports;
            return this;
        }

        /**
         * Sets the value of {@link RosDeliverTaskProps#getReports}
         * @param reports the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder reports(com.aliyun.ros.cdk.core.IResolvable reports) {
            this.reports = reports;
            return this;
        }

        /**
         * Sets the value of {@link RosDeliverTaskProps#getSchedule}
         * @param schedule the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder schedule(com.aliyun.ros.cdk.core.IResolvable schedule) {
            this.schedule = schedule;
            return this;
        }

        /**
         * Sets the value of {@link RosDeliverTaskProps#getSchedule}
         * @param schedule the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder schedule(java.util.Map<java.lang.String, ? extends java.lang.Object> schedule) {
            this.schedule = schedule;
            return this;
        }

        /**
         * Sets the value of {@link RosDeliverTaskProps#getDomainNames}
         * @param domainNames the value to be set.
         * @return {@code this}
         */
        public Builder domainNames(com.aliyun.ros.cdk.core.IResolvable domainNames) {
            this.domainNames = domainNames;
            return this;
        }

        /**
         * Sets the value of {@link RosDeliverTaskProps#getDomainNames}
         * @param domainNames the value to be set.
         * @return {@code this}
         */
        public Builder domainNames(java.util.List<? extends java.lang.Object> domainNames) {
            this.domainNames = domainNames;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDeliverTaskProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDeliverTaskProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDeliverTaskProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDeliverTaskProps {
        private final java.lang.Object deliver;
        private final java.lang.Object name;
        private final java.lang.Object reports;
        private final java.lang.Object schedule;
        private final java.lang.Object domainNames;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.deliver = software.amazon.jsii.Kernel.get(this, "deliver", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.reports = software.amazon.jsii.Kernel.get(this, "reports", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.schedule = software.amazon.jsii.Kernel.get(this, "schedule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.domainNames = software.amazon.jsii.Kernel.get(this, "domainNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.deliver = java.util.Objects.requireNonNull(builder.deliver, "deliver is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.reports = java.util.Objects.requireNonNull(builder.reports, "reports is required");
            this.schedule = java.util.Objects.requireNonNull(builder.schedule, "schedule is required");
            this.domainNames = builder.domainNames;
        }

        @Override
        public final java.lang.Object getDeliver() {
            return this.deliver;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getReports() {
            return this.reports;
        }

        @Override
        public final java.lang.Object getSchedule() {
            return this.schedule;
        }

        @Override
        public final java.lang.Object getDomainNames() {
            return this.domainNames;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("deliver", om.valueToTree(this.getDeliver()));
            data.set("name", om.valueToTree(this.getName()));
            data.set("reports", om.valueToTree(this.getReports()));
            data.set("schedule", om.valueToTree(this.getSchedule()));
            if (this.getDomainNames() != null) {
                data.set("domainNames", om.valueToTree(this.getDomainNames()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cdn.RosDeliverTaskProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDeliverTaskProps.Jsii$Proxy that = (RosDeliverTaskProps.Jsii$Proxy) o;

            if (!deliver.equals(that.deliver)) return false;
            if (!name.equals(that.name)) return false;
            if (!reports.equals(that.reports)) return false;
            if (!schedule.equals(that.schedule)) return false;
            return this.domainNames != null ? this.domainNames.equals(that.domainNames) : that.domainNames == null;
        }

        @Override
        public final int hashCode() {
            int result = this.deliver.hashCode();
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.reports.hashCode());
            result = 31 * result + (this.schedule.hashCode());
            result = 31 * result + (this.domainNames != null ? this.domainNames.hashCode() : 0);
            return result;
        }
    }
}

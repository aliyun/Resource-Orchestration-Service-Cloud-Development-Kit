package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a `ALIYUN::VPC::RouterInterface`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-20T10:55:03.654Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RouterInterfaceProps")
@software.amazon.jsii.Jsii.Proxy(RouterInterfaceProps.Jsii$Proxy.class)
public interface RouterInterfaceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getRole();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getRouterId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAccessPointId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoPay() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getHealthCheckSourceIp() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getHealthCheckTargetIp() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getInstanceChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getOppositeAccessPointId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getOppositeInterfaceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getOppositeInterfaceOwnerId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getOppositeRegionId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getOppositeRouterId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getOppositeRouterType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPricingCycle() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getRouterType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSpec() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RouterInterfaceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RouterInterfaceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RouterInterfaceProps> {
        private java.lang.String role;
        private java.lang.String routerId;
        private java.lang.String accessPointId;
        private java.lang.Object autoPay;
        private java.lang.String description;
        private java.lang.String healthCheckSourceIp;
        private java.lang.String healthCheckTargetIp;
        private java.lang.String instanceChargeType;
        private java.lang.String name;
        private java.lang.String oppositeAccessPointId;
        private java.lang.String oppositeInterfaceId;
        private java.lang.String oppositeInterfaceOwnerId;
        private java.lang.String oppositeRegionId;
        private java.lang.String oppositeRouterId;
        private java.lang.String oppositeRouterType;
        private java.lang.Number period;
        private java.lang.String pricingCycle;
        private java.lang.String routerType;
        private java.lang.String spec;

        /**
         * Sets the value of {@link RouterInterfaceProps#getRole}
         * @param role the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder role(java.lang.String role) {
            this.role = role;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getRouterId}
         * @param routerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder routerId(java.lang.String routerId) {
            this.routerId = routerId;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getAccessPointId}
         * @param accessPointId the value to be set.
         * @return {@code this}
         */
        public Builder accessPointId(java.lang.String accessPointId) {
            this.accessPointId = accessPointId;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getAutoPay}
         * @param autoPay the value to be set.
         * @return {@code this}
         */
        public Builder autoPay(java.lang.Boolean autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getAutoPay}
         * @param autoPay the value to be set.
         * @return {@code this}
         */
        public Builder autoPay(com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getHealthCheckSourceIp}
         * @param healthCheckSourceIp the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckSourceIp(java.lang.String healthCheckSourceIp) {
            this.healthCheckSourceIp = healthCheckSourceIp;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getHealthCheckTargetIp}
         * @param healthCheckTargetIp the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckTargetIp(java.lang.String healthCheckTargetIp) {
            this.healthCheckTargetIp = healthCheckTargetIp;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getInstanceChargeType}
         * @param instanceChargeType the value to be set.
         * @return {@code this}
         */
        public Builder instanceChargeType(java.lang.String instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getOppositeAccessPointId}
         * @param oppositeAccessPointId the value to be set.
         * @return {@code this}
         */
        public Builder oppositeAccessPointId(java.lang.String oppositeAccessPointId) {
            this.oppositeAccessPointId = oppositeAccessPointId;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getOppositeInterfaceId}
         * @param oppositeInterfaceId the value to be set.
         * @return {@code this}
         */
        public Builder oppositeInterfaceId(java.lang.String oppositeInterfaceId) {
            this.oppositeInterfaceId = oppositeInterfaceId;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getOppositeInterfaceOwnerId}
         * @param oppositeInterfaceOwnerId the value to be set.
         * @return {@code this}
         */
        public Builder oppositeInterfaceOwnerId(java.lang.String oppositeInterfaceOwnerId) {
            this.oppositeInterfaceOwnerId = oppositeInterfaceOwnerId;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getOppositeRegionId}
         * @param oppositeRegionId the value to be set.
         * @return {@code this}
         */
        public Builder oppositeRegionId(java.lang.String oppositeRegionId) {
            this.oppositeRegionId = oppositeRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getOppositeRouterId}
         * @param oppositeRouterId the value to be set.
         * @return {@code this}
         */
        public Builder oppositeRouterId(java.lang.String oppositeRouterId) {
            this.oppositeRouterId = oppositeRouterId;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getOppositeRouterType}
         * @param oppositeRouterType the value to be set.
         * @return {@code this}
         */
        public Builder oppositeRouterType(java.lang.String oppositeRouterType) {
            this.oppositeRouterType = oppositeRouterType;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getPricingCycle}
         * @param pricingCycle the value to be set.
         * @return {@code this}
         */
        public Builder pricingCycle(java.lang.String pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getRouterType}
         * @param routerType the value to be set.
         * @return {@code this}
         */
        public Builder routerType(java.lang.String routerType) {
            this.routerType = routerType;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getSpec}
         * @param spec the value to be set.
         * @return {@code this}
         */
        public Builder spec(java.lang.String spec) {
            this.spec = spec;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RouterInterfaceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RouterInterfaceProps build() {
            return new Jsii$Proxy(role, routerId, accessPointId, autoPay, description, healthCheckSourceIp, healthCheckTargetIp, instanceChargeType, name, oppositeAccessPointId, oppositeInterfaceId, oppositeInterfaceOwnerId, oppositeRegionId, oppositeRouterId, oppositeRouterType, period, pricingCycle, routerType, spec);
        }
    }

    /**
     * An implementation for {@link RouterInterfaceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RouterInterfaceProps {
        private final java.lang.String role;
        private final java.lang.String routerId;
        private final java.lang.String accessPointId;
        private final java.lang.Object autoPay;
        private final java.lang.String description;
        private final java.lang.String healthCheckSourceIp;
        private final java.lang.String healthCheckTargetIp;
        private final java.lang.String instanceChargeType;
        private final java.lang.String name;
        private final java.lang.String oppositeAccessPointId;
        private final java.lang.String oppositeInterfaceId;
        private final java.lang.String oppositeInterfaceOwnerId;
        private final java.lang.String oppositeRegionId;
        private final java.lang.String oppositeRouterId;
        private final java.lang.String oppositeRouterType;
        private final java.lang.Number period;
        private final java.lang.String pricingCycle;
        private final java.lang.String routerType;
        private final java.lang.String spec;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.role = software.amazon.jsii.Kernel.get(this, "role", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.routerId = software.amazon.jsii.Kernel.get(this, "routerId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.accessPointId = software.amazon.jsii.Kernel.get(this, "accessPointId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.autoPay = software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.healthCheckSourceIp = software.amazon.jsii.Kernel.get(this, "healthCheckSourceIp", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.healthCheckTargetIp = software.amazon.jsii.Kernel.get(this, "healthCheckTargetIp", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.instanceChargeType = software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.oppositeAccessPointId = software.amazon.jsii.Kernel.get(this, "oppositeAccessPointId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.oppositeInterfaceId = software.amazon.jsii.Kernel.get(this, "oppositeInterfaceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.oppositeInterfaceOwnerId = software.amazon.jsii.Kernel.get(this, "oppositeInterfaceOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.oppositeRegionId = software.amazon.jsii.Kernel.get(this, "oppositeRegionId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.oppositeRouterId = software.amazon.jsii.Kernel.get(this, "oppositeRouterId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.oppositeRouterType = software.amazon.jsii.Kernel.get(this, "oppositeRouterType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.pricingCycle = software.amazon.jsii.Kernel.get(this, "pricingCycle", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.routerType = software.amazon.jsii.Kernel.get(this, "routerType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.spec = software.amazon.jsii.Kernel.get(this, "spec", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String role, final java.lang.String routerId, final java.lang.String accessPointId, final java.lang.Object autoPay, final java.lang.String description, final java.lang.String healthCheckSourceIp, final java.lang.String healthCheckTargetIp, final java.lang.String instanceChargeType, final java.lang.String name, final java.lang.String oppositeAccessPointId, final java.lang.String oppositeInterfaceId, final java.lang.String oppositeInterfaceOwnerId, final java.lang.String oppositeRegionId, final java.lang.String oppositeRouterId, final java.lang.String oppositeRouterType, final java.lang.Number period, final java.lang.String pricingCycle, final java.lang.String routerType, final java.lang.String spec) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.role = java.util.Objects.requireNonNull(role, "role is required");
            this.routerId = java.util.Objects.requireNonNull(routerId, "routerId is required");
            this.accessPointId = accessPointId;
            this.autoPay = autoPay;
            this.description = description;
            this.healthCheckSourceIp = healthCheckSourceIp;
            this.healthCheckTargetIp = healthCheckTargetIp;
            this.instanceChargeType = instanceChargeType;
            this.name = name;
            this.oppositeAccessPointId = oppositeAccessPointId;
            this.oppositeInterfaceId = oppositeInterfaceId;
            this.oppositeInterfaceOwnerId = oppositeInterfaceOwnerId;
            this.oppositeRegionId = oppositeRegionId;
            this.oppositeRouterId = oppositeRouterId;
            this.oppositeRouterType = oppositeRouterType;
            this.period = period;
            this.pricingCycle = pricingCycle;
            this.routerType = routerType;
            this.spec = spec;
        }

        @Override
        public final java.lang.String getRole() {
            return this.role;
        }

        @Override
        public final java.lang.String getRouterId() {
            return this.routerId;
        }

        @Override
        public final java.lang.String getAccessPointId() {
            return this.accessPointId;
        }

        @Override
        public final java.lang.Object getAutoPay() {
            return this.autoPay;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.String getHealthCheckSourceIp() {
            return this.healthCheckSourceIp;
        }

        @Override
        public final java.lang.String getHealthCheckTargetIp() {
            return this.healthCheckTargetIp;
        }

        @Override
        public final java.lang.String getInstanceChargeType() {
            return this.instanceChargeType;
        }

        @Override
        public final java.lang.String getName() {
            return this.name;
        }

        @Override
        public final java.lang.String getOppositeAccessPointId() {
            return this.oppositeAccessPointId;
        }

        @Override
        public final java.lang.String getOppositeInterfaceId() {
            return this.oppositeInterfaceId;
        }

        @Override
        public final java.lang.String getOppositeInterfaceOwnerId() {
            return this.oppositeInterfaceOwnerId;
        }

        @Override
        public final java.lang.String getOppositeRegionId() {
            return this.oppositeRegionId;
        }

        @Override
        public final java.lang.String getOppositeRouterId() {
            return this.oppositeRouterId;
        }

        @Override
        public final java.lang.String getOppositeRouterType() {
            return this.oppositeRouterType;
        }

        @Override
        public final java.lang.Number getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.String getPricingCycle() {
            return this.pricingCycle;
        }

        @Override
        public final java.lang.String getRouterType() {
            return this.routerType;
        }

        @Override
        public final java.lang.String getSpec() {
            return this.spec;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("role", om.valueToTree(this.getRole()));
            data.set("routerId", om.valueToTree(this.getRouterId()));
            if (this.getAccessPointId() != null) {
                data.set("accessPointId", om.valueToTree(this.getAccessPointId()));
            }
            if (this.getAutoPay() != null) {
                data.set("autoPay", om.valueToTree(this.getAutoPay()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getHealthCheckSourceIp() != null) {
                data.set("healthCheckSourceIp", om.valueToTree(this.getHealthCheckSourceIp()));
            }
            if (this.getHealthCheckTargetIp() != null) {
                data.set("healthCheckTargetIp", om.valueToTree(this.getHealthCheckTargetIp()));
            }
            if (this.getInstanceChargeType() != null) {
                data.set("instanceChargeType", om.valueToTree(this.getInstanceChargeType()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getOppositeAccessPointId() != null) {
                data.set("oppositeAccessPointId", om.valueToTree(this.getOppositeAccessPointId()));
            }
            if (this.getOppositeInterfaceId() != null) {
                data.set("oppositeInterfaceId", om.valueToTree(this.getOppositeInterfaceId()));
            }
            if (this.getOppositeInterfaceOwnerId() != null) {
                data.set("oppositeInterfaceOwnerId", om.valueToTree(this.getOppositeInterfaceOwnerId()));
            }
            if (this.getOppositeRegionId() != null) {
                data.set("oppositeRegionId", om.valueToTree(this.getOppositeRegionId()));
            }
            if (this.getOppositeRouterId() != null) {
                data.set("oppositeRouterId", om.valueToTree(this.getOppositeRouterId()));
            }
            if (this.getOppositeRouterType() != null) {
                data.set("oppositeRouterType", om.valueToTree(this.getOppositeRouterType()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPricingCycle() != null) {
                data.set("pricingCycle", om.valueToTree(this.getPricingCycle()));
            }
            if (this.getRouterType() != null) {
                data.set("routerType", om.valueToTree(this.getRouterType()));
            }
            if (this.getSpec() != null) {
                data.set("spec", om.valueToTree(this.getSpec()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RouterInterfaceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RouterInterfaceProps.Jsii$Proxy that = (RouterInterfaceProps.Jsii$Proxy) o;

            if (!role.equals(that.role)) return false;
            if (!routerId.equals(that.routerId)) return false;
            if (this.accessPointId != null ? !this.accessPointId.equals(that.accessPointId) : that.accessPointId != null) return false;
            if (this.autoPay != null ? !this.autoPay.equals(that.autoPay) : that.autoPay != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.healthCheckSourceIp != null ? !this.healthCheckSourceIp.equals(that.healthCheckSourceIp) : that.healthCheckSourceIp != null) return false;
            if (this.healthCheckTargetIp != null ? !this.healthCheckTargetIp.equals(that.healthCheckTargetIp) : that.healthCheckTargetIp != null) return false;
            if (this.instanceChargeType != null ? !this.instanceChargeType.equals(that.instanceChargeType) : that.instanceChargeType != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.oppositeAccessPointId != null ? !this.oppositeAccessPointId.equals(that.oppositeAccessPointId) : that.oppositeAccessPointId != null) return false;
            if (this.oppositeInterfaceId != null ? !this.oppositeInterfaceId.equals(that.oppositeInterfaceId) : that.oppositeInterfaceId != null) return false;
            if (this.oppositeInterfaceOwnerId != null ? !this.oppositeInterfaceOwnerId.equals(that.oppositeInterfaceOwnerId) : that.oppositeInterfaceOwnerId != null) return false;
            if (this.oppositeRegionId != null ? !this.oppositeRegionId.equals(that.oppositeRegionId) : that.oppositeRegionId != null) return false;
            if (this.oppositeRouterId != null ? !this.oppositeRouterId.equals(that.oppositeRouterId) : that.oppositeRouterId != null) return false;
            if (this.oppositeRouterType != null ? !this.oppositeRouterType.equals(that.oppositeRouterType) : that.oppositeRouterType != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.pricingCycle != null ? !this.pricingCycle.equals(that.pricingCycle) : that.pricingCycle != null) return false;
            if (this.routerType != null ? !this.routerType.equals(that.routerType) : that.routerType != null) return false;
            return this.spec != null ? this.spec.equals(that.spec) : that.spec == null;
        }

        @Override
        public final int hashCode() {
            int result = this.role.hashCode();
            result = 31 * result + (this.routerId.hashCode());
            result = 31 * result + (this.accessPointId != null ? this.accessPointId.hashCode() : 0);
            result = 31 * result + (this.autoPay != null ? this.autoPay.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.healthCheckSourceIp != null ? this.healthCheckSourceIp.hashCode() : 0);
            result = 31 * result + (this.healthCheckTargetIp != null ? this.healthCheckTargetIp.hashCode() : 0);
            result = 31 * result + (this.instanceChargeType != null ? this.instanceChargeType.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.oppositeAccessPointId != null ? this.oppositeAccessPointId.hashCode() : 0);
            result = 31 * result + (this.oppositeInterfaceId != null ? this.oppositeInterfaceId.hashCode() : 0);
            result = 31 * result + (this.oppositeInterfaceOwnerId != null ? this.oppositeInterfaceOwnerId.hashCode() : 0);
            result = 31 * result + (this.oppositeRegionId != null ? this.oppositeRegionId.hashCode() : 0);
            result = 31 * result + (this.oppositeRouterId != null ? this.oppositeRouterId.hashCode() : 0);
            result = 31 * result + (this.oppositeRouterType != null ? this.oppositeRouterType.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.pricingCycle != null ? this.pricingCycle.hashCode() : 0);
            result = 31 * result + (this.routerType != null ? this.routerType.hashCode() : 0);
            result = 31 * result + (this.spec != null ? this.spec.hashCode() : 0);
            return result;
        }
    }
}
